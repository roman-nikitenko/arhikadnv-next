import React from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "Які архітектурні послуги ви надаєте в Бучі?",
      answer:
        "Ми надаємо повний спектр архітектурних послуг в Бучі, включаючи проектування будинків, оформлення будівельного паспорта, топозйомку, геодезичні роботи, кадастрові послуги та дизайн інтер'єру.",
    },
    {
      question: "Скільки часу потрібно для отримання будівельного паспорта?",
      answer:
        "Термін отримання будівельного паспорта зазвичай становить від 10 до 30 робочих днів, залежно від складності проекту та наявності всіх необхідних документів.",
    },
    {
      question: "Чи потрібен геодезичний знімок для проектування?",
      answer:
        "Так, геодезичний знімок є обов'язковим документом для проектування. Він дозволяє точно визначити межі ділянки, рельєф місцевості та наявні комунікації.",
    },
    {
      question: "Яка вартість архітектурного проекту будинку?",
      answer:
        "Вартість проекту залежить від багатьох факторів: площі будинку, складності архітектурного рішення, кількості поверхів, використовуваних матеріалів. Для точного розрахунку рекомендуємо звернутися до наших спеціалістів.",
    },
    {
      question: "Чи надаєте ви послуги з реконструкції існуючих будівель?",
      answer:
        "Так, ми спеціалізуємося на реконструкції та ремонті існуючих будівель в Бучі. Наші фахівці допоможуть модернізувати будівлю з урахуванням сучасних вимог та стандартів.",
    },
    {
      question: "Які документи потрібні для початку робіт?",
      answer:
        "Для початку робіт необхідно надати: документи на земельну ділянку, геодезичний знімок, технічні умови на підключення комунікацій (якщо є), а також технічне завдання на проектування.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="max-w-4xl mx-auto pt-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Часті питання</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <details
            key={index}
            className="group cursor-pointer bg-[#E0F7F7] rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <summary className="flex gap-4 items-center p-4 justify-between cursor-pointer">
              <h3 className="text-lg font-medium">{item.question}</h3>
              <svg
                className="w-6 h-6 text-gray-500 transform group-open:rotate-180 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className=" p-4 pt-0 text-gray-600">{item.answer}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
};

export default FAQ;
