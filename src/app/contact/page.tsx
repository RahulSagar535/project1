import type { Metadata } from "next";
import { ContactFormTabs } from "@/components/contact-form-tabs";
import { LogoCloud } from "@/components/logo-cloud";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Trettau Studio for design projects, consulting, and strategic hospitality or retail design leadership.",
};

export default function ContactPage() {
  return (
    <>
      <section className="container-x section-y pb-8">
        <Reveal>
          <p className="eyebrow mb-5">Get in Touch</p>
          <h1 className="display max-w-6xl">Let&apos;s Build Something Remarkable</h1>
          <p className="body-large mt-8 max-w-3xl">
            Transformative retail and hospitality environments, flagship formats, and
            brand experience strategy for the world&apos;s most recognized brands.
          </p>
        </Reveal>
      </section>
      <LogoCloud dense className="pb-6" />
      <ContactFormTabs />
    </>
  );
}
