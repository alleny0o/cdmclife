import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import React from 'react'
import ContactUsContent from '../components/ContactUsContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
};

function ContactUsPage() {
  return (
    <div className="w-full h-full bg-stone-50">
      <Breadcrumbs />
      <ContactUsContent />
    </div>
  )
}

export default ContactUsPage;