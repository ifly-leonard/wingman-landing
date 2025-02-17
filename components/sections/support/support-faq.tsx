"use client" 

import { useEffect, useState } from "react";
import SectionHeader from "@/components/ui/section-header";

export default function SupportFAQ() {
  
    const faqs = [
      {
        title: "What are the advantages of your service?",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: false,
      },
      {
        title: "Are there any fees or commissions in addition to the monthly subscription?",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: false,
      },
      {
        title: "You really don't charge per user? Why not?",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: false,
      },
      {
        title: "What happens when I go over my monthly active limit?",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: true,
      },
      {
        title: "Can your service help me understand how to work with my product?",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: false,
      },
      {
        title: "Which third-party application do you integrate with?",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: false,
      },
      {
        title: "I have another question!",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: false,
      },
    ]
  
    return (
      <section id="support-faq" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* <SectionHeader header="the Frequently Asked Questions" subheader="You will never talk to a bot" /> */}
        <p className="text-2xl text-center font-bold">
            before you open a ticket, here are the FAQs we receive
        </p>
        <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-12">          
          <div className="divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
                {faq.text}
              </Accordion>
            ))}
          </div>
  
        </div>
      </section>
    )
  }
  
  interface AccordionProps {
    children: React.ReactNode;
    title: string;
    id: string;
    active?: boolean;
  }
  
  export function Accordion({ children, title, id, active = false }: AccordionProps) {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
  
    useEffect(() => {
      setAccordionOpen(active)
    }, [])
  
    return (
      <div className="py-2">
        <h2>
          <button
            className="flex items-center justify-between w-full text-left font-semibold py-2"
            onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
            aria-expanded={accordionOpen}
            aria-controls={`accordion-text-${id}`}
          >
            <span>{title}</span>
            <svg className="fill-blue-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <rect y="7" width="16" height="2" rx="1" className={`ttransform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
              <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
            </svg>
          </button>
        </h2>
        <div
          id={`accordion-text-${id}`}
          role="region"
          aria-labelledby={`accordion-title-${id}`}
          className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <p className="pb-3">
              {children}
            </p>
          </div>
        </div>
      </div>
    )
  }