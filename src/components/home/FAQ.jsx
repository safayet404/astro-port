import { createSignal, For } from 'solid-js';

const faqs = [
    {
        question: "Do you provide long-term support?",
        answer: "Yes, we offer lifetime support for all our projects. We ensure your digital product continues to run smoothly after launch with various maintenance packages."
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary depending on scope. A simple landing page might take 2 weeks, while a complex web application could take 2-3 months."
    },
    {
        question: "Do you design for mobile?",
        answer: "Absolutely. We follow a mobile-first approach, ensuring that your website looks and functions perfectly on all devices, from smartphone to desktop."
    },
    {
        question: "What is your pricing structure?",
        answer: "We offer both fixed-price packages and hourly rates depending on the project type. Contact us for a custom quote tailored to your needs."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = createSignal(0);

    const toggle = (index) => {
        setOpenIndex(openIndex() === index ? null : index);
    };

    return (
        <section id="faq" class=" px-5 mt-10 mb-20">
            <div class="container mx-auto">
                <div style="display: grid; gap: 4rem; grid-template-columns: 1fr;">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl leading-[1.05] font-normal text-left tracking-[-0.02em] text-black mb-2">
                            Frequently Asked Questions.
                        </h2>
                        <p class="text-[12px] leading-tight text-left mt-4 text-gray-500 max-w-190 mx-auto">
                            Get answers to commonly asked questions.

                        </p>

                        <a
                            href="#book"
                            class="flex items-center gap-2 px-6 py-2 w-fit mt-10 rounded-lg text-white bg-[linear-gradient(180deg,#7091FF_0%,#3363FF_100%)]! transition-transform active:scale-95"
                        >
                            Ask Question
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                class="btn-icon"
                            >
                                <path
                                    d="M7 17L17 7M17 7H7M17 7V17"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                    <div style="flex: 1;">
                        <For each={faqs}>
                            {(faq, index) => (
                                <div style="border-bottom: 1px solid #222;">
                                    <button
                                        onClick={() => toggle(index())}
                                        style="width: 100%; text-align: left; padding: 1.5rem 0; display: flex; justify-content: space-between; align-items: center; color: white; background: none; border: none; cursor: pointer;"
                                    >
                                        <span class="text-[#303030]" style="font-size: 1.125rem; font-weight: 500;">{faq.question}</span>
                                        <span class="text-[#303030]" style={{
                                            transform: openIndex() === index() ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s'
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <g clip-path="url(#clip0_3411_7881)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0318 16.4431C15.0341 16.4455 15.0364 16.4477 15.0387 16.45L16.453 15.0358L16.4286 15.0113C13.6651 12.2249 13.8355 8.46087 15.5691 6.72733L14.1548 5.31312C12.7453 6.72266 12.1229 8.78925 12.3435 10.9263L4.96253 3.54528L3.54829 4.95952L10.9294 12.3406C8.79224 12.1199 6.72558 12.7424 5.31601 14.152L6.73023 15.5662C8.4674 13.829 12.2437 13.6615 15.0318 16.4431Z" fill="#303030" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_3411_7881">
                                                        <rect width="20" height="20" fill="white" transform="matrix(1 0 0 -1 0 20)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </button>
                                    <div style={{
                                        "max-height": openIndex() === index() ? '200px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.3s ease',
                                        color: '#a1a1aa',
                                        "line-height": '1.6'
                                    }}>
                                        <div style="padding-bottom: 1.5rem;">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </div>
            <style>{`
        @media (min-width: 768px) {
            .container > div {
                grid-template-columns: 1fr 1.5fr !important;
            }
        }
     `}</style>
        </section>
    );
}