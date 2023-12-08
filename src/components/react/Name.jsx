import { motion } from 'framer-motion';

export default function Name() {
  return (
    <motion.span
      animate={{
        color: ['#000000', '#dc2626', '#d97706', '#16a34a', '#2563eb', '#7e22ce', '#000000'],
      }}
      transition={{
        duration: 20,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: 2,
        repeatDelay: 5,
      }}
      className="md:text-6xl text-center lg:text-left xl:text-7xl 2xl:text-8xl font-bold"
    >
      Yenaro Noa
    </motion.span>
  );
}
