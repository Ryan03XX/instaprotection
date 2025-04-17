"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    category: "Help & Support",
    questions: [
      {
        q: "I did not receive my SMS OTP",
        a: "Please check if your mobile number is updated correctly in the InstaProtection app. If the problem persists, please drop us an e-mail at customerservice@instaprotection.sg.",
      },
      {
        q: "I am unable to login",
        a: "Please check if your mobile number is updated correctly in the InstaProtection app. If the problem persists, please drop us an e-mail at customerservice@instaprotection.sg.",
      },
      {
        q: "I am experiencing problems with the app. Who should I contact?",
        a: "Please drop us an e-mail at customerservice@instaprotection.sg. We will assist you as soon as we can.",
      },
    ],
  },
  {
    category: "Claim Issues",
    questions: [
      {
        q: "How do I check my claim status?",
        a: "You can check your claim status via the InstaProtection app under 'My Claims'.",
      },
    ],
  },
  // Add more categories here...
];

export default function FaqAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <section className="px-6 md:px-20 py-12 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">FAQs</h2>
      {faqData.map((section) => (
        <div key={section.category} className="mb-6 border-b pb-4">
          <button
            className="flex items-center justify-between w-full text-left font-semibold text-xl text-gray-700 hover:text-blue-600"
            onClick={() => toggleCategory(section.category)}
          >
            {section.category}
            {openCategory === section.category ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
          {openCategory === section.category && (
            <ul className="mt-4 space-y-4 text-gray-600">
              {section.questions.map((item, idx) => (
                <li key={idx}>
                  <p className="font-semibold">{idx + 1}. {item.q}</p>
                  <p className="pl-4 mt-1 text-sm">{item.a}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
