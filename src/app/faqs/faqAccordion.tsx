"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

const faqData = [
  {
    category: "About InstaProtection",
    questions: [
      {
        q: "What is InstaProtection?",
        a: "InstaProtection provides easy and comprehensive insurance solutions to Malaysia, Singapore, Thailand, Vietnam, and Indonesia. Since being founded in 2018, we have made great progress in building all-encompassing insurance plans that meet your personal needs. We strive to help you live a worry-free life, and continuously work to expand our regional footprint to protect you across borders.More about us.",
      },
      {
        q: "How does InstaProtection work?",
        a: "InstaProtection changes the traditional insurance model.",
        b: "- With the InstaProtection mobile app, you can protect what you love whenever and wherever you want.",
        c: "- You only pay a one-time premium charge for your chosen plan.",
        d: "- You can make quick and easy claims with our fast approval process, with no additional fees required.",
      },
      {
        q: "How is InstaProtection different?",
        a: "InstaProtection is unique in our abilities to provide quick, easy, and all-encompassing insurance solutions to customers in a hassle-free environment.",
        b: "- We lessen the burden of complicated paperwork submission.",
        c: "- Customers can easily purchase and/or make claims all through the InstaProtection mobile app.",
        d: "- With the mobile app, customers will benefit from the convenience of having one central point of contact.",
      },
      {
        q: "Where can I download the InstaProtection app?",
        a: "You can download the InstaProtection app from the Apple App Store or Google Play Store.",
      },
    ],
  },
  {
    category: "Our Products",
    questions: [
      {
        q: "What products does InstaProtection offer?",
        a: "InstaProtection offers Protection Care Plans in 4 categories: Lifestyle, Household, Automotive, and Personal.Currently, InstaProtection has launched 3 plans in the lifestyle category:",
        b: "1) 1 x Time Mobile Phone Screen Crack Protection for 12 months coverage.",
        c: "2) 1 x Time Mobile Phone Screen Crack and/or Liquid Damage Protection for 12 months coverage.",
        d: "3) 1 x Time Mobile Phone Screen Crack and/or Liquid Damge and/or Theft Protection for 12 months coverage.",
        e: "These insurance policies are underwritten by Etiqa.",
        f: "More Protection Care Plans are coming to you soon! Click here to learn more.",
      },
      {
        q: "How much are InstaProtection’s premiums?",
        a: "At InstaProtection, our insurance premiums are a one-time payment, starting as low as S$34.90.",
        b: "InstaProtection offers you the flexibility to adjust your premiums depending on the level of protection you need.",
      },
      {
        q: "How do InstaProtection’s plans work?",
        a: "InstaProtection’s Care Plans have a 12-months coverage period, requiring only a one-time payment which then allows you to make one claim for your insured product.",
      },
      {
        q: "What mobile phone brands does InstaProtection cover?",
        a: "YInstaProtection protects: Apple, Samsung, Huawei, Oppo, Vivo, XiaoMi, and RealMe.You can purchase InstaProtection’s Care Plans anytime within your phone’s 1st year of warranty.",
      },
      {
        q: "Are the prices listed on InstaProtection’s products for 1 year of coverage?",
        a: "Yes, the prices listed are for 1 year of coverage.Majority of InstaProtection’s Care Plans do not require an excess fee when you submit a claim to us. Products that require an excess fee will be clearly stated.",
      },
      {
        q: "What Is Zero Excess?",
        a: "An Excess or Deductible is the amount you are required to pay when you make a claim. At InstaProtection, majority of our plans have Zero Excess, which means that you do not have to pay additional fees when you make a claim.",
      },
      {
        q: "Does InstaProtection underwrite the insurance plans?",
        a: "No, InstaProtection does not underwrite our plans. We work with A-rated insurers who underwrite all our plans.",
      },
      {
        q: "Which insurance companies does InstaProtection work with?",
        a: "InstaProtection teams up with various A-rated insurers to change insurance for the better.Click here to learn more.",
      },
    ],
  },
  {
    category: "Registration Issues",
    questions: [
      {
        q: "How long does it take for my registration to be approved?",
        a: "You will be approved within 24 working hours upon registration.",
      },
      {
        q: "Why is my Care Plan not approved yet?",
        a: "You will be approved within 24 working hours upon registration.",
        b: "If your Care Plan is still not approved, please reach out to us through the app. We will get back to you as soon as possible.",
      },
      {
        q: "How do I check my registration status?",
        a: "You can check your registration status in the InstaProtection app. Your status will be updated on your Care Plan.",
      },
      {
        q: " How do I find my IMEI number?",
        a: "Dial *#06# on your phone. Your IMEI number will be displayed on your screen.",
      },
      {
        q: "Are there any guidelines for self-registration?",
        a: "InstaProtection made self-registration of Care Plans as easy as possible.Simply download the InstaProtection app from the Apple App Store or Google Play Store, and follow the registration steps provided.",
        b: "Watch this video to see how self-registration works.",
      },
    ],
  },
  {
    category: "Claim Issues",
    questions: [
      {
        q: "How do I make a claim?",
        a: "You may submit your claims through the InstaProtection app.",
        b: "Alternatively, you may submit them here.",
      },
      {
        q: "When should I make a claim?",
        a: "You should make a claim within 7 days of the event or as soon as possible.",
      },
      {
        q: "How are claims paid out?",
        a: "InstaProtection will pay for the repair directly, at an authorised service centre. You will not need to pay for the repair once you have received approval for your claim.",
      },
      {
        q: "Are there any guidelines for making a claim?",
        a: "InstaProtection made filing of claims as easy as possible.",
        b: "Simply follow the steps provided in the InstaProtection app, or watch this video to learn how to file a claim.",
      },
      {
        q: "How do I check my claim status?",
        a: "You can check your claim status in the InstaProtection app.",
      },
      {
        q: "How long does it take for my claim to be processed?",
        a: "All our claims are processed instantly if your claim documents are filed correctly.Straightforward claims are approved immediately by our platform whereas complex claims might take anywhere between 3 to 14 working days for approval from the insurer.",
      },
      {
        q: "HWhere are InstaProtection’s repair services done?",
        a: "InstaProtection’s repairs are done by your brands’ Authorised Service Centres located across Singapore.",
      },
    ],
  },
  {
    category: "Help & Support",
    questions: [
      {
        q: "I did not receive my SMS OTP",
        a: "Please check if your mobile number is updated correctly in the InstaProtection app.",
        b: "If the problem persists, please drop us an e-mail at customerservice@instaprotection.sg. We will assist you as soon as we can.",
      },
      {
        q: "I am unable to login",
        a: "Please check if your mobile number is updated correctly in the InstaProtection app.",
        b: "If the problem persists, please drop us an e-mail at customerservice@instaprotection.sg. We will assist you as soon as we can.",
      },
      {
        q: "I am experiencing problems with the app. Who should I contact?",
        a: "Please drop us an e-mail at customerservice@instaprotection.sg. We will assist you as soon as we can.",
      },
    ],
  },
];

export default function FaqAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  type QuestionItem = {
    q: string;
    a?: string;
    b?: string;
    c?: string;
    d?: string;
    e?: string;
    f?: string;
  };

  const formatAnswerText = (text: string): React.ReactNode => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const linkRegex = /^(click here|here|watch this video)$/i;
  
    const parts = text.split(/(\bclick here\b|\bhere\b|\bwatch this video\b|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi);
  
    return parts.map((part, index) => {
      if (emailRegex.test(part)) {
        return (
          <a key={index} href={`mailto:${part}`} className="text-[#2a5caa]">
            {part}
          </a>
        );
      } else if (linkRegex.test(part)) {
        return (
          <a key={index} href="#" className="text-[#2a5caa]">
            {part}
          </a>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };
  
  

  return (
    <section className="px-6 md:px-20 py-12 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">FAQs</h2>
      {faqData.map((section) => {
        const isOpen = openCategory === section.category;
        return (
          <div key={section.category} className="mb-6 border-b pb-4">
            <button
              className={clsx(
                "flex items-center justify-between w-full text-left font-semibold text-xl cursor-pointer transition-colors duration-200",
                isOpen ? "text-black" : "text-gray-500 hover:text-black"
              )}
              onClick={() => toggleCategory(section.category)}
            >
              {section.category}
              {isOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>

            <div
              className={clsx(
                "transition-all duration-500 overflow-hidden",
                isOpen ? "max-h-[800px] mt-4" : "max-h-0"
              )}
            >
              <ul className="space-y-4 text-gray-600">
                {(section.questions as QuestionItem[]).map((item, idx) => (
                  <li key={idx}>
                    <p className="font-semibold text-black">
                      {idx + 1}. {item.q}
                    </p>

                    {(["a", "b", "c", "d", "e", "f"] as const).map((key) =>
                      item[key] ? (
                        <p
                          key={key}
                          className={clsx(
                            "pl-4 text-sm",
                            key === "a" ? "mt-1 font-medium" : "mt-1",
                            key === "f" ? "mt-2" : ""
                          )}
                        >
                          {formatAnswerText(item[key]!)}
                        </p>
                      ) : null
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
}
