import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Mustard Seed",
    description: "A Mustard Seed Faith \uD83C\uDF31",
    openGraph: {
      title: "Mustard Seed",
      description: "A Mustard Seed Faith \uD83C\uDF31",
    },
};

function MustardSeedPage() {
  return (
    <div className="w-full h-full bg-stone-50">
        <Breadcrumbs />
    </div>
  )
}

export default MustardSeedPage;