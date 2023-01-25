import AboutProjectLangflow from '../AboutProjectLangflow/AboutProjectLangflow'
import { motion } from 'framer-motion/dist/framer-motion'

const OurProducts = () => {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ easy: 'easyInOut', duration: 0.5 }}>
            <AboutProjectLangflow />
        </motion.div>
    );
};

export default OurProducts