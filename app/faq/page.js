"use client";

import React, { useState, useEffect, useMemo } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQPage() {
  const faqs = useMemo(
    () => [
      { q: "What services does CSW offer?", a: "We provide Web Development, App Development, Software Development, UI/UX Design, Digital Marketing, Graphic Design, and Research & Analytics services." },
      { q: "How can I contact CSW?", a: "You can contact us via email at info@csw.com or through our contact form on the website." },
      { q: "Do you provide custom software solutions?", a: "Yes, we specialize in creating custom software solutions tailored to your business needs." },
      { q: "What technologies do you use?", a: "We use React.js, Node.js, Next.js, Flutter, MongoDB, WordPress, Wix, Tailwind CSS, and many more modern technologies." },
      { q: "Can you redesign my existing website?", a: "Absolutely! We provide UI/UX redesign services to enhance the look, feel, and performance of your website." },
      { q: "Do you offer mobile app development?", a: "Yes, we develop high-performance mobile apps for both Android and iOS using React Native and Flutter." },
      { q: "How long does a typical project take?", a: "Project timelines vary depending on complexity, but we provide detailed estimates during consultation." },
      { q: "Do you provide SEO services?", a: "Yes, our digital marketing services include SEO, SEM, social media marketing, and content marketing." },
      { q: "Can I track the progress of my project?", a: "Yes, we provide regular updates and milestones to ensure transparency throughout the development process." },
      { q: "What&apos;s your pricing model?", a: "We offer flexible pricing depending on project scope, complexity, and client requirements. Contact us for a quote." },
      { q: "Do you sign NDAs?", a: "Yes, we ensure complete confidentiality and are happy to sign NDAs with our clients." },
      { q: "Do you provide post-launch support?", a: "Yes, we offer maintenance and support services after project launch." },
      { q: "Can you integrate third-party APIs?", a: "Absolutely, we can integrate a wide range of APIs to enhance functionality." },
      { q: "Do you offer cloud solutions?", a: "Yes, we provide cloud-based solutions for scalability and reliability." },
      { q: "What&apos;s your refund policy?", a: "Refund policies are defined in the contract and depend on project type and agreement terms." },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (openIndex !== null) {
      console.log(`FAQ opened: ${faqs[openIndex].q}`);
    }
  }, [openIndex, faqs]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-black text-white px-6  pb-10 pt-25">
      <section className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Click on a question to reveal the answer.
        </p>
      </section>

      <section className="max-w-7xl mx-auto ">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center relative z-10"
              >
                <div
                  className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                  }}
                />
                <h4 className="font-medium text-lg">{faq.q}</h4>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-300 relative z-10">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
