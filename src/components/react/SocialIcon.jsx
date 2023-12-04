import { motion } from 'framer-motion';

export default function SocialIcon({ link, name, src }) {
  return (
    <motion.a
      className="w-9"
      href={link}
      target="_blank"
      animate={{
        color: '#000000',
      }}
      whileHover={{
        scale: 1.2,
        color: '#ffffff',
      }}
    >
      <img src={src} alt={name} />
    </motion.a>
  );
}
