"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { brand } from "@/lib/data";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "projects", label: "Design Projects" },
  { id: "consulting", label: "Consulting" },
  { id: "other", label: "Other" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const inputClass =
  "w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-base outline-none transition placeholder:text-black/34 focus:border-black/35 focus:ring-4 focus:ring-black/8";

function Field({
  label,
  id,
  type = "text",
  optional = false,
}: {
  label: string;
  id: string;
  type?: string;
  optional?: boolean;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-semibold text-muted">
        {label}
        {optional ? <span className="font-normal"> (optional)</span> : null}
      </span>
      <input id={id} name={id} type={type} required={!optional} className={inputClass} />
    </label>
  );
}

function SelectField({ label, id, options }: { label: string; id: string; options: string[] }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-semibold text-muted">{label}</span>
      <select id={id} name={id} required className={inputClass} defaultValue="">
        <option value="" disabled>
          Select {label.toLowerCase()}...
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function SubmitButton() {
  return (
    <button type="submit" className="btn-dark mt-2 w-full sm:w-auto">
      Send inquiry <ArrowRight size={18} aria-hidden="true" />
    </button>
  );
}

export function ContactFormTabs() {
  const [active, setActive] = useState<TabId>("projects");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const firstName = data[`${active}-first-name`] || "";
    const lastName = data[`${active}-last-name`] || "";
    const email = data[`${active}-email`] || "";
    const company = data[`${active}-company`] || "";
    const message = data[`${active}-message`] || "";
    
    const subject = encodeURIComponent(`New Inquiry from ${firstName} ${lastName} (${active})`);
    
    let bodyText = `Name: ${firstName} ${lastName}\n`;
    bodyText += `Email: ${email}\n`;
    if (company) bodyText += `Company: ${company}\n`;
    
    if (active === "projects") {
      bodyText += `Project Type: ${data["project-type"] || "Not specified"}\n`;
      bodyText += `Location: ${data["project-location"] || "Not specified"}\n`;
      bodyText += `Scale: ${data["project-scale"] || "Not specified"}\n`;
      bodyText += `Budget: ${data["project-budget"] || "Not specified"}\n`;
    } else if (active === "consulting") {
      bodyText += `Title: ${data["consulting-title"] || "Not specified"}\n`;
      bodyText += `Org Type: ${data["organization-type"] || "Not specified"}\n`;
      bodyText += `Engagement: ${data["engagement-type"] || "Not specified"}\n`;
      bodyText += `Scope: ${data["capital-scope"] || "Not specified"}\n`;
    }
    
    bodyText += `\nMessage:\n${message}\n`;
    
    const mailtoLink = `mailto:${brand.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoLink;
    
    setSent(true);
  }

  return (
    <section className="container-x pb-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/8 bg-white/58 p-4 shadow-card backdrop-blur md:p-7">
        <div role="tablist" aria-label="Contact form type" className="grid gap-2 sm:grid-cols-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              aria-controls={`${tab.id}-panel`}
              id={`${tab.id}-tab`}
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-semibold transition",
                active === tab.id ? "bg-black text-white shadow-card" : "bg-white/70 hover:bg-white",
              )}
              onClick={() => {
                setActive(tab.id);
                setSent(false);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`${active}-panel`}
            role="tabpanel"
            aria-labelledby={`${active}-tab`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="pt-7"
          >
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="First Name" id={`${active}-first-name`} />
                <Field label="Last Name" id={`${active}-last-name`} />
                <Field label="Email" id={`${active}-email`} type="email" />
                <Field
                  label={active === "other" ? "Company" : "Brand / Company"}
                  id={`${active}-company`}
                  optional={active === "other"}
                />
                {active === "projects" ? (
                  <>
                    <SelectField
                      label="Project Type"
                      id="project-type"
                      options={["Hospitality", "Retail", "Mixed-use", "Brand environment"]}
                    />
                    <Field label="Location" id="project-location" />
                    <SelectField
                      label="Project Scale"
                      id="project-scale"
                      options={["Under 2,000 sq ft", "2,000-8,000 sq ft", "8,000+ sq ft", "Portfolio"]}
                    />
                    <SelectField
                      label="Approximate Budget"
                      id="project-budget"
                      options={["Under $500k", "$500k-$1M", "$1M-$5M", "$5M+"]}
                    />
                  </>
                ) : null}
                {active === "consulting" ? (
                  <>
                    <Field label="Your Title / Role" id="consulting-title" />
                    <SelectField
                      label="Organization Type"
                      id="organization-type"
                      options={["Hospitality owner", "Retail brand", "Real estate developer", "Board or leadership"]}
                    />
                    <SelectField
                      label="Engagement Type"
                      id="engagement-type"
                      options={["Brand audit", "Design leadership", "Prototype strategy", "Asset refresh"]}
                    />
                    <SelectField
                      label="Capital Scope"
                      id="capital-scope"
                      options={["Single site", "Flagship", "Multi-site", "Global portfolio"]}
                    />
                  </>
                ) : null}
              </div>

              <label htmlFor={`${active}-message`} className="block">
                <span className="mb-2 block text-sm font-semibold text-muted">
                  {active === "projects"
                    ? "Project Overview"
                    : active === "consulting"
                      ? "What are you looking to address?"
                      : "Message"}
                </span>
                <textarea
                  id={`${active}-message`}
                  name={`${active}-message`}
                  rows={6}
                  required
                  className={cn(inputClass, "resize-y")}
                />
              </label>

              {sent ? (
                <p role="status" className="rounded-xl bg-black/5 px-4 py-3 text-sm text-muted">
                  Thank you. Your email client has been opened with your inquiry details.
                </p>
              ) : null}

              <SubmitButton />
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
