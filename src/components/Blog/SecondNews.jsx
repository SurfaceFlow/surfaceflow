import './news.scss'
import blog2 from '../../images/blog2.png'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion/dist/framer-motion'

const SecondNews = () => {
    const { t } = useTranslation()

    return (
        <motion.div className='news' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ easy: 'easyInOut', duration: 0.75 }}>
            <div className='news_header'>{t("headersecondnews")}</div>
            <img
                src={blog2}
                alt="blog2"
                className='news_img'
            />
            <div className='news_description'>{t("textsecondnews")}</div>
        </motion.div>
    );
};

export default SecondNews