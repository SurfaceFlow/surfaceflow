import AboutProjectSurfaceflow from '../AboutProjectSurfaceflow/AboutProjectSurfaceflow'
import YoutubeVideo from '../YoutubeVideo/YoutubeVideo'
import Blog from '../Blog/Blog'
import InteractiveBlock from '../InteractiveBlock/InteractiveBlock'
import { motion } from 'framer-motion/dist/framer-motion'

const HomePage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ easy: 'easyInOut', duration: 0.5 }}>
            <AboutProjectSurfaceflow />
            <InteractiveBlock />
            <YoutubeVideo />
            <Blog />
        </motion.div>
    )
}

export default HomePage