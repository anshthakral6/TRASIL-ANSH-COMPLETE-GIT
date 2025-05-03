// Example: Using Framer Motion in React Component
import { motion } from 'framer-motion';

export default function AnimatedSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='animated-box'
    >
      <h2>Start Your Journey with Trasil.ai</h2>
      <p>Smart recommendations. Dynamic pricing. Party alerts.</p>
    </motion.div>
  );
}
