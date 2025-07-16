import { motion } from 'framer-motion';
import { Card, CardContent, CardTitle, CardDescription } from '../components/ui/card';

const projects = [
  {
    title: 'E-Commerce Platform',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    description: 'A scalable online store with seamless checkout and modern UI.'
  },
  {
    title: 'Brand Website',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'A bold, animated site for a leading African brand.'
  },
  {
    title: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    description: 'A cross-platform app with beautiful transitions and UX.'
  },
  {
    title: 'Portfolio Site',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'A creative portfolio for a digital artist.'
  },
];

export default function Project() {
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
        <h1 className="text-4xl md:text-6xl font-orbitron font-extrabold mb-2">Our Work</h1>
        <p className="text-lg md:text-2xl text-white/80 max-w-2xl text-center mb-4">Explore some of our favorite projects, crafted with passion and precision for our clients.</p>
      </motion.div>
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(255,115,0,0.15)' }}
          >
            <Card className="overflow-hidden bg-white/5 border-white/10 border shadow-lg hover:shadow-orange-500/20 transition-all">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-bold text-white mb-2">{project.title}</CardTitle>
                <CardDescription className="text-white/80">{project.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 