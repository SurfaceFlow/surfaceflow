import './aboutprojectsurfaceflow.scss'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion/dist/framer-motion'

const headerAnimation = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }, 
    }),
}

const descriptionAnimation = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }, 
    }),
}

const AboutProjectSurfaceflow = () => {
    const { t } = useTranslation()

    return (
        <motion.div className='about_project-surface' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <div className='text_container'>
                <motion.div className='header' variants={headerAnimation} >
                    <h1 className="mx-5 text">{t("surfaceflowis")}</h1>
                </motion.div>
                <motion.div className='description' variants={descriptionAnimation} >
                    <h4 className="text">{t("surfaceflowdescription")}</h4>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AboutProjectSurfaceflow