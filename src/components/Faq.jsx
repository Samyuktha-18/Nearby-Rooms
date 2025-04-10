import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  
    {
      question: "How do I book a room?",
      answer:
        "Use the search bar, select your dates and location, and click 'Book Now'.",
    },
    {
      question: "Are the rooms verified?",
      answer:
        "Yes, all our listings go through a strict verification process.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes, cancellation policies vary by host. Please check before booking.",
    },
    {
      question: "Is there any booking fee?",
      answer:
        "No, we do not charge users any additional booking fee. You only pay what is listed by the host.",
    },
    {
      question: "Can I contact the host before booking?",
      answer:
        "Absolutely! You can message the host directly through our platform to ask any questions before confirming your booking.",
    },
    {
      question: "How do I know if a property is still available?",
      answer:
        "Our listings are updated in real-time. If the property is visible and not marked as booked, it is available.",
    },
    {
      question: "Do you support long-term stays?",
      answer:
        "Yes, many of our hosts offer discounts for long-term bookings. Use filters to find monthly stay options.",
    },
    {
      question: "What should I do if I face issues during my stay?",
      answer:
        "We’re here to help 24/7. Reach out to our support team immediately and we’ll work to resolve any issues.",
    },
  ];
  

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex justify-between items-center text-left font-medium text-gray-800 hover:bg-gray-50 transition"
              >
                <span>{faq.question}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
