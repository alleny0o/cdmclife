"use client";

import { Section, Container } from "@/components/layouts/Layouts";
import { H3 } from "@/components/text/H3";

import { useForm } from "react-hook-form";
import { FormData } from "../types/form-types";
import formSchema from "../validation/form-zod";
import { zodResolver } from "@hookform/resolvers/zod";

function ContactUsContent() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const errors = form.formState.errors;
  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (formData: FormData) => {
    console.log("Form submitted", formData);
  };

  return (
    <Section className="min-h-screen">
      <Container className="pt-16 pb-16">
        <div className="w-full max-w-5xl mx-auto">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-y-8">
            {/* Contact Form Section */}
            <div className="bg-vintageNavy col-span-1 p-6">
              <H3 className="uppercase text-white">Contact Us</H3>
              <form className="mt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-y-4 gap-x-4">
                  {/* Full Name */}
                  <div className="space-y-2 col-span-1">
                    <label className="text-sm sm:text-base text-white" htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      className="w-full bg-white p-2 rounded-sm border border-deepBlack text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#b45f06]"
                      placeholder="Enter full name..."
                      type="text"
                      {...form.register("name")}
                    />
                    {errors.name && <p className="mt-1 text-[#b45f06] text-xs italic">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2 col-span-1">
                    <label className="text-sm sm:text-base text-white" htmlFor="email">Email</label>
                    <input
                      id="email"
                      className="w-full bg-white p-2 rounded-sm border border-deepBlack text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#b45f06]"
                      placeholder="Enter email..."
                      type="email"
                      {...form.register("email")}
                    />
                    {errors.email && <p className="mt-1 text-[#b45f06] text-xs italic">{errors.email.message}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="col-span-1 text-sm sm:text-base text-white" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    className="w-full bg-white p-2 rounded-sm border border-deepBlack text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#b45f06]"
                    placeholder="Enter subject..."
                    type="text"
                    {...form.register("subject")}
                  />
                  {errors.subject && <p className="mt-1 text-[#b45f06] text-xs italic">{errors.subject.message}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm sm:text-base text-white" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="mt-2 w-full bg-white p-2 rounded-sm border border-deepBlack text-sm sm:text-base h-48 focus:outline-none focus:ring-2 focus:ring-[#b45f06]"
                    placeholder="Enter message..."
                    {...form.register("message")}
                  />
                  {errors.message && <p className="text-[#b45f06] text-xs italic">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  className="w-full md:w-auto max-w-sm bg-white text-vintageNavy font-medium px-5 py-3 rounded-md text-sm sm:text-base hover:bg-opacity-90 transition-all shadow-md mx-auto block"
                  onClick={(e) => {
                    e.preventDefault();
                    form.handleSubmit(onSubmit)();
                  }}
                  type="submit"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>

            {/* Google Map Section */}
            <div className="w-full h-full min-h-[500px] col-span-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.4931033838798!2d-77.26714677346786!3d39.07066909517849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b633ca21177d25%3A0xff045ace808bcd5b!2s12811%20Glen%20Rd%2C%20North%20Potomac%2C%20MD%2020878!5e0!3m2!1sen!2sus!4v1740383966490!5m2!1sen!2sus"
                className="w-full h-full shadow-lg border border-gray-300"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ContactUsContent;
