import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">About Me</h2>
          <div className="space-y-6 text-slate-400 text-lg md:text-xl leading-relaxed text-justify">
            <p>
              I am a passionate <span className="text-white">Software Engineer</span> currently pursuing my B.Tech in Computer Science and Engineering at Amrita Vishwa Vidyapeetham. My journey in tech is driven by a deep fascination with how complex systems work and a desire to build intelligent solutions that solve real-world problems.
            </p>
            <p>
              With a strong foundation in <span className="text-white">Machine Learning, Blockchain, Full-Stack Development, Data Analytics, and Business Analytics</span>, I enjoy the challenge of bridging the gap between high-level application logic and low-level system optimization. I've worked on projects ranging from decentralized supply chain trackers to real-time healthcare monitoring systems.
            </p>
            <p>
              Beyond technical skills, I am a dedicated <span className="text-white">NSS Volunteer</span>, believing that technology should be used for social good. I'm always eager to learn new technologies and collaborate on innovative projects that push the boundaries of what's possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
