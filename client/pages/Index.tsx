import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ProjectsSection } from "../components/ProjectsSection";
import GoogleGeminiEffectDemo from "../components/ui/google-gemini-effect-demo";
import MacbookScrollDemo from "../components/ui/macbook-scroll-demo";
import HeroParallaxDemo from "@/components/ui/hero-parallax-demo";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

export default function Index() {
  const [activeSection, setActiveSection] = useState(0);

  // Animation logic for the animated image row
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 400]),
    springConfig
  );
  const rotate = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [10, 0]),
    springConfig
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Parallax background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <HeroParallaxDemo />
        </div>
        {/* Floating NavBar */}
        <div className="relative z-10">
          <FloatingNav
            navItems={[
              {
                name: "Home",
                link: "/",
                icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
              },
              {
                name: "Projects",
                link: "#projects",
                icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
              },
              {
                name: "Service",
                link: "#",
                icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
              },
              {
                name: "Contact",
                link: "#",
                icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
              },
            ]}
          />
          {/* Agency Hero Section - Creative Redesign */}
          <section className="relative flex flex-col items-center justify-center min-h-[90vh] w-full overflow-hidden pt-32 pb-16">
            {/* Layered Gradients and Floating Shapes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-[#FF7300]/60 to-[#FFB347]/40 rounded-full blur-3xl z-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
              className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#FF7300]/40 to-[#FFB347]/20 rounded-full blur-2xl z-0"
            />
            {/* Floating DA Logo */}
            <motion.img
              src="/DA.png"
              alt="Digital Addis Logo"
              className="w-28 h-28 mb-8 rounded-full shadow-2xl object-contain z-10 border-4 border-white/10 bg-black/60"
              initial={{ y: -60, opacity: 0, scale: 0.7 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 120 }}
            />
            {/* Animated Headline */}
            <motion.h1
              className="text-center text-white font-orbitron font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-xl z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, type: 'spring' }}
            >
              <span className="bg-gradient-to-r from-[#FF7300] via-white to-[#FFB347] bg-clip-text text-transparent animate-gradient-x">We Are Your Next</span>
              <br />
              <span className="inline-block relative">
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8, type: 'spring' }}
                  className="text-[#FF7300] drop-shadow-lg"
                >
                  Digital Agency
                </motion.span>
                <motion.span
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-[#FF7300]/60 rounded-full blur-md"
                  initial={{ opacity: 0, scaleX: 0.5 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 1.1 }}
                />
              </span>
            </motion.h1>
            {/* Subheading */}
            <motion.p
              className="text-center text-white/80 max-w-2xl mx-auto mb-10 text-lg md:text-2xl z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              We craft bold, high-performance digital experiences for brands that want to stand out. From immersive web design to seamless CMS and animation, we help you make a statement.
            </motion.p>
            {/* CTA Area */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-4 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <button className="bg-[#FF7300] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-orange-400 animate-bounce-slow">Start Your Project</button>
              <button className="bg-white/10 border-2 border-[#FF7300] text-[#FF7300] hover:bg-[#FF7300] hover:text-white font-bold py-4 px-10 rounded-xl text-xl transition-all focus:outline-none focus:ring-2 focus:ring-orange-400">View Our Work</button>
            </motion.div>
            {/* Social Proof Avatars and Tagline */}
            <motion.div
              className="flex items-center space-x-2 mt-10 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client 1" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client 2" />
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/men/65.jpg" alt="Client 3" />
                <AvatarFallback>EF</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/women/22.jpg" alt="Client 4" />
                <AvatarFallback>GH</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/men/12.jpg" alt="Client 5" />
                <AvatarFallback>IJ</AvatarFallback>
              </Avatar>
              <span className="ml-4 flex items-center space-x-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                ))}
              </span>
              <span className="ml-2 text-white/80 text-sm font-medium">Trusted by brands across Africa & beyond.</span>
            </motion.div>
            {/* Blurred Orange Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-[#FF7300] opacity-60 blur-3xl rounded-full pointer-events-none" style={{ filter: 'blur(60px)' }} />
          </section>
        </div>
      </div>

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection />
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Animated Transition Section */}
      <GoogleGeminiEffectDemo />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Trusted By Section Component
function TrustedBySection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-black py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-orbitron font-bold text-white text-center mb-16"
        >
          Trusted by brands building the future
        </motion.h2>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex space-x-16 items-center"
          >
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <span className="text-white font-orbitron font-bold text-sm">
                  BRAND {i + 1}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// Services Section Component with integrated MacbookScroll
function ServicesSection() {
  return <ServicesWithMacbook />;
}

// Services Section with MacbookScroll Integration
function ServicesWithMacbook() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const backgroundOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0.3, 1]),
    springConfig,
  );

  return (
    <motion.section ref={ref} className="relative bg-black overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/10 to-transparent pointer-events-none"
        style={{
          opacity: backgroundOpacity,
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-orange/5 to-transparent pointer-events-none"
        style={{
          opacity: backgroundOpacity,
        }}
      />

      {/* Services Header */}
      <div className="relative z-10">
        <motion.div
          className="max-w-7xl mx-auto py-20 px-4 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What we do
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-300 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We craft digital experiences that transform businesses and captivate
            audiences. Our expertise spans across web development, design, and
            digital strategy.
          </motion.p>
        </motion.div>

        {/* MacbookScroll Component */}
        <MacbookScrollDemo />

        {/* Services Grid */}
        <motion.div
          className="max-w-7xl mx-auto px-4 py-20"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-white font-orbitron font-bold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

const servicesData = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites built with cutting-edge technology",
    icon: "🌐",
  },
  {
    title: "3D Animation",
    description:
      "Stunning 3D visuals and animations that bring your brand to life",
    icon: "🎬",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to grow your online presence",
    icon: "📈",
  },
  {
    title: "Branding & Strategy",
    description: "Complete brand identity and strategic positioning",
    icon: "🎨",
  },
];

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Digital-Addis transformed our online presence completely. Their attention to detail and innovative approach exceeded our expectations.",
      name: "Sarah Johnson",
      company: "TechCorp",
    },
    {
      quote:
        "The 3D animations they created for our product launch were absolutely stunning. Our engagement rates increased by 300%.",
      name: "Michael Chen",
      company: "InnovateLab",
    },
    {
      quote:
        "Professional, creative, and results-driven. Digital-Addis is our go-to partner for all digital marketing needs.",
      name: "Emma Rodriguez",
      company: "BrandForward",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-black py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-orbitron font-bold text-white text-center mb-16"
        >
          What our clients say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ rotateY: 5, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-brand-orange/20"
            >
              <div className="text-brand-orange text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <h4 className="text-white font-orbitron font-bold">
                  {testimonial.name}
                </h4>
                <p className="text-brand-orange text-sm">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// Footer Component
function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-black py-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-orbitron font-bold text-white">
              DIGITAL-ADDIS
            </h3>
          </div>

          <nav className="flex space-x-8">
            {["Home", "Services", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ color: "#CC3C03" }}
                className="text-white hover:text-brand-orange transition-colors duration-300 font-orbitron"
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t border-gray-700 mt-8 pt-8"
        >
          <p className="text-center text-gray-400">
            © 2024 Digital-Addis. Building the future, one pixel at a time.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
