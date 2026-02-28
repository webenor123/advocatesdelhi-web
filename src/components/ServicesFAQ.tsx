"use client";

import { useState } from 'react';
import Container from './Container';

const faqs = [
    {
        question: 'What is the process of property registration in Delhi?',
        answer: 'Property registration in Delhi involves preparation of the deed, verification of title documents, payment of applicable stamp duty, scheduling an appointment at the sub-registrar office, biometric verification of parties, and final registration. Proper documentation and compliance with the Registration Act, 1908 are required for lawful transfer of ownership.',
    },
    {
        question: 'What documents are required for property registration in Delhi?',
        answer: 'Commonly required documents include the original Sale Deed/Conveyance Deed, previous chain of title documents, structural safety/NOCs (if applicable), ID proofs (Aadhaar/PAN) of buyer, seller, and two witnesses, along with proof of stamp duty payment.',
    },
    {
        question: 'Is hiring a property registration lawyer mandatory in Delhi?',
        answer: 'While not strictly mandatory by law, hiring a lawyer is highly recommended. A lawyer ensures all documents are legally sound, verifies the title, checks for encumbrances, and navigates the complex sub-registrar procedures smoothly to prevent future legal disputes.',
    },
    {
        question: 'What is stamp duty for property registration in Delhi?',
        answer: 'Stamp duty is calculated based on the circle rate of the area or the actual transaction value, whichever is higher. Generally, it is 6% for men and 4% for women in Delhi, plus a 1% registration fee. Rates may vary slightly based on property type and jurisdiction.',
    },
    {
        question: 'What is the difference between leasehold and freehold property in Delhi?',
        answer: 'In a freehold property, you have complete ownership of the property and the land it stands on. In a leasehold property, you own the building but the land is leased from the government or development authority (like DDA) for a specific period (usually 99 years).',
    },
    {
        question: 'How long does property registration take in Delhi?',
        answer: 'Property registration in Delhi typically takes one to three working days, subject to document completeness and availability of appointments at the sub-registrar office.',
    },
    {
        question: 'What is DDA freehold conversion?',
        answer: 'DDA freehold conversion is the process of converting a leasehold property allotted by the Delhi Development Authority (DDA) into a freehold property. This gives the owner absolute rights over both the property and land, enhancing its marketability.',
    },
    {
        question: 'What is property mutation and why is it important?',
        answer: 'Property mutation is the process of changing the title ownership in the local municipal revenue records after a transfer. It is crucial because it establishes new property tax liability and serves as a vital proof of ownership for future transactions or utility connections.',
    },
    {
        question: 'Can NRIs register property in Delhi?',
        answer: 'Yes, NRIs can register property remotely in Delhi through a registered Power of Attorney (POA). The NRI will need to execute the POA in favor of a trusted representative in India, which must be attested by the Indian consulate in their residing country.',
    },
    {
        question: 'What is a legal title search before purchasing property?',
        answer: 'A legal title search involves tracing the history of the property\'s ownership through sub-registrar records to ensure the seller has a clear, marketable title, free from disputes, mortgages, or encumbrances before you commit to purchasing it.',
    }
];

export default function ServicesFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <Container>
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-[32px] md:text-[40px] font-semibold leading-tight tracking-tight">
                        <span className="text-gray-900">Frequently asked </span>
                        <span className="text-gray-500">questions</span>
                    </h2>
                </div>

                {/* FAQ Accordion List */}
                <div className="max-w-[1000px] mx-auto flex flex-col">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="border-b border-gray-100 last:border-b-0"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center py-5 md:py-6 text-left transition-colors focus:outline-none group"
                                >
                                    <span className="text-[14px] md:text-[15px] font-semibold text-[#1c1d20] pr-8 group-hover:text-black transition-colors">
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
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-5 md:pb-6' : 'max-h-0 opacity-0 pb-0'
                                        }`}
                                >
                                    <p className="text-[13px] md:text-[14px] text-gray-500 font-medium leading-[1.8] pr-10">
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
