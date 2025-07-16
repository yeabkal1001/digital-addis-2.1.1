import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start pt-32 pb-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-12"
      >
        <img src="/DA.png" alt="Digital Addis Logo" className="w-20 h-20 mb-4 rounded-full shadow-lg object-contain" />
        <h1 className="text-4xl md:text-6xl font-orbitron font-extrabold mb-2">About Digital Addis</h1>
        <p className="text-lg md:text-2xl text-white/80 max-w-2xl text-center mb-4">We are a creative digital agency passionate about building bold, high-performance experiences for brands across Africa and beyond.</p>
      </motion.div>
      {/* Timeline/Accordion for Agency Story */}
      <div className="w-full max-w-2xl mx-auto">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Our Mission</AccordionTrigger>
            <AccordionContent>
              To empower brands with innovative digital solutions that drive growth, engagement, and impact.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Our Values</AccordionTrigger>
            <AccordionContent>
              Creativity, integrity, and excellence are at the heart of everything we do. We believe in collaboration and pushing boundaries.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Our Journey</AccordionTrigger>
            <AccordionContent>
              Founded in Addis Ababa, we have grown into a team of passionate designers, developers, and strategists serving clients worldwide.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
} 