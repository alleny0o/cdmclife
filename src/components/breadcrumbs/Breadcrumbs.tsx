'use client';

import React from 'react';
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IconType } from "react-icons";
import { links } from '@/constants/nav-links';
import { Container, Section } from '../layouts/Layouts';

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Function to find the matching link and build the breadcrumb path
  const getBreadcrumbItems = () => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbItems: Array<{ label: string; href: string; icon?: IconType }> = [
      { label: 'Home', href: '/', icon: Home }
    ];

    const currentLink = links;
    let currentPath = '';

    pathSegments.forEach((segment) => {
      // Search in main links
      let found = currentLink.find(link => link.href?.includes(segment));

      // If not found in main links, search in sublinks
      if (!found) {
        for (const link of currentLink) {
          if (link.subLinks) {
            for (const subLink of link.subLinks) {
              const subMenuItem = subLink.subMenu?.find(item => item.href.includes(segment));
              if (subMenuItem) {
                found = {
                  id: link.id,
                  label: subMenuItem.label,
                  href: subMenuItem.href,
                  icon: subMenuItem.icon
                };
                break;
              }
            }
          }
        }
      }

      if (found) {
        currentPath += `/${segment}`;
        breadcrumbItems.push({
          label: found.label,
          href: found.href || currentPath,
          icon: found.icon
        });
      }
    });

    return breadcrumbItems;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <Section className="bg-gray-100">
      <Container>
        <nav className="flex items-center text-sm py-3">
          <div className="flex items-center space-x-2">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              const Icon = item.icon;

              return (
                <React.Fragment key={item.href}>
                  {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400" />}
                  {isLast ? (
                    <div className="flex items-center text-gray-900 font-medium">
                      {Icon && <Icon className="h-4 w-4 mr-2" />}
                      <span>{item.label}</span>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 flex items-center"
                    >
                      {Icon && <Icon className="h-4 w-4 mr-2" />}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </nav>
      </Container>
    </Section>
  );
};

export default Breadcrumbs;