import './news.scss'
import blog2 from '../../images/blog2.png'
import { useTranslation } from 'react-i18next'

const SecondNews = (): JSX.Element => {
    const { t } = useTranslation()

    return (
        <div className='news'>
            <div className='news_header'>{t("headersecondnews")}</div>
            <img
                src={blog2}
                alt="blog2"
                className='news_img'
            />
            <div className='news_description'>{t("textsecondnews")}</div>
        </div>
    );
};

export default SecondNews