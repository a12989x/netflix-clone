import React, { useState } from 'react';

import faqsData from '../fixtures/faqs.json';

import Faq from './Faq';
import CtaForm from './CtaForm';

const Faqs = () => {
    const [answerOpen, setAnswerOpen] = useState(null);

    return (
        <section className='faqs'>
            <h3 className='faqs__title'>Frequently Asked Questions</h3>

            <ul>
                {faqsData.map((item) => (
                    <Faq
                        key={item.id}
                        {...item}
                        setAnswerOpen={setAnswerOpen}
                        answerOpen={answerOpen}
                    />
                ))}
            </ul>

            <CtaForm />
        </section>
    );
};

export default Faqs;
