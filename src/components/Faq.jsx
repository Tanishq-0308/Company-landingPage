import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-2xl">{isOpen ? '×' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQSection = ({children}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is the cost of a mobile application?",
      answer: "The cost varies depending on the complexity and features of the application."
    },
    {
      question: "How long will development take?",
      answer: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer. Average development time from start to finished application: Medium projects up to 3 months. Large projects about 4-6 months. To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality."
    },
    {
      question: "Do you provide a guarantee for the mobile application?",
      answer: "Yes, we provide guarantees for our mobile applications. The specific terms would be discussed during the project planning phase."
    },
    {
      question: "I will not tell my idea, do you guarantee confidentiality?",
      answer: "Yes, we guarantee confidentiality for all client ideas and projects. We can sign an NDA if required."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">FAQ</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={index === openIndex}
            onToggle={() => setOpenIndex(index === openIndex ? null : index)}
          />
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default FAQSection;