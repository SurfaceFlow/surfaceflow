import './blog.scss'
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/blog3.jpg'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion/dist/framer-motion'

const animation = {
    hidden: {
        y: 30,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }, 
    }),
  }

const Blog = () => {
    const { t } = useTranslation()

    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
            <motion.div className='blog' variants={animation}>
                <a className='blog_item' href="/firstnews">
                    <img
                        src={blog1}
                        alt="blog1"
                        className='blog_img'
                    />
                    <div className='blog_text'>
                        <div className='blog_header'>{t("headerfirstnews")}</div>
                        <div className='blog_description'>{t("textfirstnewslite")}</div>
                        <a className='blog_more'>{t("more")}</a>
                    </div>
                </a>
                <a className='blog_item' href="/secondnews">
                    <img
                        src={blog2}
                        alt="blog2"
                        className='blog_img'
                    />
                    <div className='blog_text'>
                        <div className='blog_header'>{t("headersecondnews")}</div>
                        <div className='blog_description'>{t("textsecondnewslite")}</div>
                        <a className='blog_more'>{t("more")}</a>
                    </div>
                </a>
                <a className='blog_item' href="/thirdnews">
                    <img
                        src={blog3}
                        alt="blog3"
                        className='blog_img'
                    />
                    <div className='blog_text'>
                        <div className='blog_header'>{t("headerthirdnews")}</div>
                        <div className='blog_description'>{t("textthirdnewslite")}</div>
                        <a className='blog_more'>{t("more")}</a>
                    </div>
                </a>
            </motion.div>
        </motion.div>
    );
};

export default Blog