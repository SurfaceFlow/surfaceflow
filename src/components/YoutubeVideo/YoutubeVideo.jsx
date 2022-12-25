import './videoyoutube.scss'
import { motion } from 'framer-motion/dist/framer-motion'

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.2 }, 
  }),
}

const YoutubeVideo = () => {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
      <motion.div className="video-responsive" variants={animation}>
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/2Yr6DvVRe-I`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video youtube"
        />
      </motion.div>
    </motion.div>
  );
};

export default YoutubeVideo