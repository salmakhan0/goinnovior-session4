
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What other services are you compatible with?",
    answer:
      "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the internet.",
  },
  {
    question: "I have a technical need resolved, who do i email?",
    answer:
      "If you have any technical issues or need assistance, please contact our support team. Our team will help you resolve your problem as quickly as possible.",
  },
  {
    question: "What other services are you compatible with?",
    answer:
      "Our platform supports different services and integrations to make your experience easier and more convenient.",
  },
  {
    question: "What other services are you compatible with?",
    answer:
      "We provide flexible solutions and support to help you get the best experience from our platform.",
  },
];

const companies = [
  {
    name: "coursera",
    className: "text-blue-900 font-black italic tracking-tight",
  },
  {
    name: "Udemy",
    className: "text-gray-600 font-extrabold",
  },
  {
    name: "FedEx",
    className: "text-purple-900 font-black tracking-tight",
  },
  {
    name: "EDUCATION",
    className: "text-blue-800 font-medium tracking-widest",
  },
  {
    name: "ELECOM",
    className: "text-blue-800 font-black tracking-tight",
  },
  {
    name: "indeed",
    className: "text-blue-600 font-bold tracking-tight",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* FAQ Section */}
        <div className="mx-auto max-w-2xl">
          <div className="mb-9 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-gray-500">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div key={index}>
                  <button
                    onClick={() =>
                      setActiveIndex(isOpen ? null : index)
                    }
                    className={`flex w-full items-center justify-between rounded-sm border px-5 py-4 text-left transition-all duration-300 ${
                      isOpen
                        ? "border-sky-100 bg-sky-50"
                        : "border-gray-200 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-xs font-semibold text-gray-700 sm:text-sm">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-gray-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-2 pt-3">
                      <p className="text-xs leading-6 text-gray-500">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Trusted Companies */}
        <div className=" hidden lg:block mt-20">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Trusted by over 800+ companies
          </h2>

          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:justify-between sm:gap-x-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className={`text-xl sm:text-2xl ${company.className}`}
              >
                {company.name}
                {company.name === "FedEx" && (
                  <span className="text-orange-500">.</span>
                )}
                {company.name === "indeed" && (
                  <span className="align-top text-[9px]">®</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
