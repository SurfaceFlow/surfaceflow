import './blog.scss'
import FirstNews from './FirstNews'
import SecondNews from './SecondNews'
import ThirdNews from './ThirdNews'
import { motion } from 'framer-motion/dist/framer-motion'

const News = () => {
    return (
        <motion.div style={{ padding: '0 65px' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ easy: 'easyInOut', duration: 0.5 }}>
            <FirstNews />
            <hr />
            <SecondNews />
            <hr />
            <ThirdNews />
        </motion.div>
    );
};

export default News