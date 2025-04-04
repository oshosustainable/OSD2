import React, { useState } from 'react';
import { color, motion } from 'framer-motion';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './faqs.css';
import faqimage from './images/faqs.png';



function Faqs() {
    const faqs = [
        {
            question: "What services does your company provide in construction and design?",
            answer: "Our company offers a comprehensive range of services including architectural design, construction management, project planning, structural engineering, civil works, interior design, and landscaping. We handle both residential and commercial projects with a focus on quality and timely delivery."
        },
        {
            question: "How can I get a project quote or consultation?",
            answer: "To get a project quote or consultation, simply reach out to us via our contact page or call our office. We will schedule a meeting to discuss your requirements and provide a tailored solution that fits your budget and project needs."
        },
        {
            question: "How do you ensure the quality of construction in your projects?",
            answer: "We follow strict quality control measures by using high-grade materials, conducting regular site inspections, and ensuring compliance with local building codes and standards. Our team of experienced professionals ensures that every project is executed to perfection."
        },
        {
            question: "What steps do you take to ensure safety at construction sites?",
            answer: "Safety is a top priority in all our projects. We follow rigorous safety protocols, provide proper training for our workers, use safety equipment, and conduct regular safety audits to minimize risks and prevent accidents on site."
        },
        {
            question: "How do you handle project timelines and deadlines?",
            answer: "We use efficient project management techniques to ensure that projects are completed on schedule. Our team carefully plans every phase of construction, anticipates potential delays, and works diligently to meet deadlines, ensuring minimal disruption to your project."
        },
        
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container" id='faq-container'>
            <div className="faq-image">
                <motion.img 
                    src={faqimage} 
                    alt="" 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                />
            </div>
            <div className="faq-questions">
            <h1 style={{ textAlign: 'left', marginTop: '0px',marginBottom: '25px', fontSize: '40px' }}>FAQs?</h1>
                {faqs.map((faq, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: false }}
                    >
                        <div className={`question${index + 1}`} onClick={() => handleClick(index)}>
                            {faq.question}
                            <a><i className={`bi ${openIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'}`} style={{color:'black'}}></i></a>
                        </div>
                        
                        <motion.div 
                            className={`anscss ${openIndex === index ? 'show' : ''}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={openIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ fontSize: '15px' }}
                        >
                            {faq.answer}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Faqs;
