import DynamicFrameLayout from "./DynamicFrameLayout";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

export function ProjectsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Parallax effects for different elements
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.3, 1]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, -100]),
    springConfig,
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0.8, 1]),
    springConfig,
  );

  return (
    <motion.section
      ref={ref}
      className="min-h-screen bg-black text-white relative overflow-hidden [perspective:1000px] [transform-style:preserve-3d]"
      style={{
        opacity,
      }}
    >
      <motion.div
        className="container mx-auto px-4 py-16 lg:py-24"
        style={{
          rotateX,
          scale,
        }}
      >
        <motion.div
          className="grid lg:grid-cols-12 gap-8 lg:gap-16 h-full"
          style={{
            translateY,
          }}
        >
          {/* Left Content Panel */}
          <motion.div
            className="lg:col-span-4 flex flex-col justify-center space-y-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section Header */}
            <motion.div
              className="space-y-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="w-16 h-0.5 bg-brand-orange"
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.div>

              <motion.h2
                className="font-orbitron font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                OUR
                <br />
                <motion.span
                  className="text-brand-orange"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  PROJECTS
                </motion.span>
              </motion.h2>

              <motion.div
                className="w-24 h-0.5 bg-brand-orange"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              ></motion.div>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.p
                className="text-white text-lg leading-relaxed font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Explore our portfolio of cutting-edge digital solutions. Each
                project represents our commitment to innovation, creativity, and
                technical excellence.
              </motion.p>

              <motion.p
                className="text-white/80 text-base leading-relaxed font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                From web applications to mobile experiences, we craft digital
                products that drive results and exceed expectations.
              </motion.p>
            </motion.div>

            {/* Stats or Features */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-3xl font-orbitron font-bold text-brand-orange"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                >
                  50+
                </motion.div>
                <div className="text-white text-sm uppercase tracking-wider">
                  Projects Completed
                </div>
              </motion.div>
              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-3xl font-orbitron font-bold text-brand-orange"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
                >
                  100%
                </motion.div>
                <div className="text-white text-sm uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="pt-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="group relative overflow-hidden bg-transparent border-2 border-brand-orange hover:border-white px-8 py-4 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1, type: "spring" }}
              >
                <span className="relative z-10 font-chakra font-bold text-sm tracking-wider uppercase text-brand-orange group-hover:text-black transition-colors duration-300">
                  View All Projects
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Video Grid Panel */}
          <motion.div
            className="lg:col-span-8"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="h-[400px] lg:h-[600px] xl:h-[700px]"
              style={{
                rotateY: useSpring(
                  useTransform(scrollYProgress, [0, 1], [10, -5]),
                  springConfig,
                ),
              }}
              whileHover={{
                rotateY: 0,
                transition: { duration: 0.3 },
              }}
            >
              <DynamicFrameLayout />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-orange/10 to-transparent pointer-events-none"
        style={{
          opacity: useSpring(
            useTransform(scrollYProgress, [0, 0.5], [0.5, 1]),
            springConfig,
          ),
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-orange/5 to-transparent pointer-events-none"
        style={{
          opacity: useSpring(
            useTransform(scrollYProgress, [0.3, 1], [0.3, 0.8]),
            springConfig,
          ),
        }}
      ></motion.div>
    </motion.section>
  );
}
