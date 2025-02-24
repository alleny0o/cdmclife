import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import React from 'react'
import ContactUsContent from '../components/ContactUsContent';

function ContactUsPage() {
  return (
    <div className="w-full h-full bg-stone-50">
      <Breadcrumbs />
      <ContactUsContent />
    </div>
  )
}

export default ContactUsPage;