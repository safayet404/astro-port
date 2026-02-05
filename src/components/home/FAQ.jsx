import { createSignal, For } from 'solid-js';

const faqs = [
    {
        question: "What makes your UI/UX and web design different?",
        answer: "I focus on user-friendly, modern, and business-driven design. Every design I create is clean, easy to use, and built to help you get more users, leads, or sales, not just look good."
    },
    {
        question: "Do you create fully custom website designs?",
        answer: "Yes, every pixel is crafted from scratch to align with your brand identity and business goals, ensuring a unique digital presence."
    },
    {
        question: "Will my website be mobile-friendly and responsive?",
        answer: "Absolutely. I follow a mobile-first philosophy so your site works seamlessly on phones, tablets, and large desktop screens."
    },
    {
        question: "Can you redesign my existing website?",
        answer: "Yes, I can audit your current site and perform a full strategic redesign to improve conversion rates and user experience."
    },
    {
        question: "Do you design e-commerce websites?",
        answer: "I specialize in conversion-optimized e-commerce layouts for platforms like Shopify and custom builds, focusing on the buyer's journey."
    },
    {
        question: "How long does it take to design a website?",
        answer: "A standard landing page takes about 1-2 weeks, while a full multi-page website typically takes 3-5 weeks depending on complexity."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = createSignal(0);

    const toggle = (index) => {
        setOpenIndex(openIndex() === index ? null : index);
    };

    return (
        <section id="faq" class="py-20 bg-[#F9F9F9]">
            <div class="container mx-auto px-4 ">
                <div class="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">

                    {/* Left Side: Header */}
                    <div class="lg:w-1/3">
                        <span class="inline-block px-4 py-1 border border-gray-400 rounded-full text-xs font-bold text-gray-800 bg-white mb-6 uppercase tracking-wider">
                            FAQ,s
                        </span>
                        <h2 class="text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p class="text-lg text-gray-500 font-medium mb-10">
                            You have more questions !
                        </p>

                        <a
                            href="https://wa.me/yournumber"
                            class="flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-fit rounded-full text-white font-bold text-lg bg-[#3363FF] hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
                        >
                            Ask Question
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor" />
                                <path d="M12 1C5.925 1 1 5.925 1 12c0 2.07.575 4.004 1.573 5.658L1.085 22.5l5.035-1.543A10.95 10.95 0 0012 23c6.075 0 11-4.925 11-11S18.075 1 12 1zm0 20a8.943 8.943 0 01-4.524-1.228l-.324-.19-3.004.921.936-2.91-.208-.33A8.944 8.944 0 013 12c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>

                    {/* Right Side: Accordion */}
                    <div class="lg:w-2/3 bg-white rounded-3xl p-4 lg:p-8 shadow-sm">
                        <For each={faqs}>
                            {(faq, index) => (
                                <div class="border-b border-gray-100 last:border-0">
                                    <button
                                        onClick={() => toggle(index())}
                                        class="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                                    >
                                        <span class={`text-xl font-bold transition-colors ${openIndex() === index() ? 'text-[#3363FF]' : 'text-[#1A1A1A]'}`}>
                                            {faq.question}
                                        </span>
                                        <span class="flex-shrink-0 ml-4">
                                            {openIndex() === index() ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                            )}
                                        </span>
                                    </button>
                                    <div
                                        class={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex() === index() ? 'max-h-96 pb-6' : 'max-h-0'}`}
                                    >
                                        <p class="text-gray-500 text-lg leading-relaxed pr-10">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </For>
                    </div>

                </div>
            </div>
        </section>
    );
}