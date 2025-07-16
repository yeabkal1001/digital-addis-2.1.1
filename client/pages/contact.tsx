import { motion } from 'framer-motion';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-32 pb-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-12"
      >
        <img src="/DA.png" alt="Digital Addis Logo" className="w-20 h-20 mb-4 rounded-full shadow-lg object-contain" />
        <h1 className="text-4xl md:text-6xl font-orbitron font-extrabold mb-2">Contact Us</h1>
        <p className="text-lg md:text-2xl text-white/80 max-w-2xl text-center mb-4">Let’s build something amazing together. Reach out and we’ll get back to you soon!</p>
      </motion.div>
      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full max-w-lg bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-6 shadow-lg"
        onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}
      >
        <Input type="text" placeholder="Your Name" required className="bg-black/60 text-white placeholder:text-white/60" />
        <Input type="email" placeholder="Your Email" required className="bg-black/60 text-white placeholder:text-white/60" />
        <textarea placeholder="Your Message" required className="bg-black/60 text-white placeholder:text-white/60 rounded-md p-3 min-h-[120px]" />
        <Button type="submit" className="bg-[#FF7300] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition-all">Send Message</Button>
      </motion.form>
      {/* Contact Info */}
      <div className="mt-10 text-center text-white/80">
        <div>Email: <a href="mailto:hello@digitaladdis.com" className="text-[#FF7300] hover:underline">hello@digitaladdis.com</a></div>
        <div>Phone: <a href="tel:+251900000000" className="text-[#FF7300] hover:underline">+251 900 000 000</a></div>
        <div>Address: Addis Ababa, Ethiopia</div>
      </div>
    </div>
  );
} 