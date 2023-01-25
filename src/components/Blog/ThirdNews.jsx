import './news.scss'
import blog3 from '../../images/blog3.jpg'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion/dist/framer-motion'

const ThirdNews = () => {
    const { t } = useTranslation()

    return (
        <motion.div className='news' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ easy: 'easyInOut', duration: 0.75 }}>
            <div className='news_header'>{t("headerthirdnews")}</div>
            <img
                src={blog3}
                alt="blog3"
                className='news_img'
            />
            <div className='news_description'>{t("textthirdnews")}</div>
        </motion.div>
    );
};

export default ThirdNews