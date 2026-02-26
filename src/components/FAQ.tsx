"use client";

import { useState } from 'react';
import Container from './Container';

const faqs = [
    {
        question: 'How long does property registration take in Delhi?',
        answer: 'Property registration in Delhi typically takes one to three working days, subject to document completeness and appointments.',
    },
    {
        question: 'Is a lawyer mandatory for registration?',
        answer: 'While not strictly mandatory by law, hiring a lawyer is highly recommended. A lawyer ensures all documents are legally sound, verifies the title, checks for encumbrances, and navigates the complex sub-registrar procedures smoothly to prevent future legal disputes.',
    },
    {
        question: 'Can NRIs register property remotely?',
        answer: 'Yes, NRIs can register property remotely in Delhi through a registered Power of Attorney (POA). The NRI will need to execute the POA in favor of a trusted representative in India, which must be attested by the Indian consulate in their residing country.',
    },
    {
        question: 'What happens if registration is delayed?',
        answer: 'If property registration is delayed beyond the stipulated 4 months from execution, a penalty of up to 10 times the original registration fee may be levied by the sub-registrar. It is strongly advised to complete registration within the legal timeframe.',
    },
    {
        question: 'What documents are required for property registration in Delhi?',
        answer: 'Commonly required documents include the original Sale Deed/Conveyance Deed, previous chain of title documents, structural safety/NOCs (if applicable), ID proofs (Aadhar/PAN) of buyer, seller, and two witnesses, along with proof of stamp duty payment.',
    },
    {
        question: 'How are registration fees and stamp duty calculated?',
        answer: 'Stamp duty is calculated based on the circle rate of the area or the actual transaction value, whichever is higher. Generally, it is 6% for men and 4% for women in Delhi, plus a 1% registration fee. Rates may vary slightly based on property type and jurisdiction.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-16 md:pt-24 bg-white">
            <Container>
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-[32px] md:text-[40px] font-semibold leading-tight tracking-tight">
                        <span className="text-gray-900">Frequently asked </span>
                        <span className="text-gray-500">questions</span>
                    </h2>
                </div>

                {/* FAQ Accordion List */}
                <div className="max-w-[900px] mx-auto flex flex-col">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="border-b border-gray-100 last:border-b-0"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center py-5 text-left transition-colors focus:outline-none"
                                >
                                    <span className="text-[14px] font-semibold text-gray-800 pr-8">
                                        {faq.question}
                                    </span>

                                    {/* Icon */}
                                    <div className="text-gray-600 shrink-0">
                                        {isOpen ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="8" y1="12" x2="16" y2="12" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="12" y1="8" x2="12" y2="16" />
                                                <line x1="8" y1="12" x2="16" y2="12" />
                                            </svg>
                                        )}
                                    </div>
                                </button>

                                {/* Answer - CSS Transition max-height approach */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0 pb-0'
                                        }`}
                                >
                                    <p className="text-[13px] text-slate-400 font-medium leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
