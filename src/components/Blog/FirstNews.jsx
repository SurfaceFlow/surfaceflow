import './news.scss'
import blog1 from '../../images/blog1.png'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion/dist/framer-motion'

const FirstNews = () => {
    const { t } = useTranslation()

    return (
        <motion.div className='news' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ easy: 'easyInOut', duration: 1 }}>
            <div className='news_header'>{t("headerfirstnews")}</div>
            <img
                src={blog1}
                alt="blog1"
                className='news_img'
            />
            <div className='news_description'>{t("textfirstnews")}</div>
        </motion.div>
    );
};

export default FirstNews