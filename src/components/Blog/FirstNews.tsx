import './news.scss'
import blog1 from '../../images/blog1.png'
import { useTranslation } from 'react-i18next'

const FirstNews = (): JSX.Element => {
    const { t } = useTranslation()

    return (
        <div className='news'>
            <div className='news_header'>{t("headerfirstnews")}</div>
            <img
                src={blog1}
                alt="blog1"
                className='news_img'
            />
            <div className='news_description'>{t("textfirstnews")}</div>
        </div>
    );
};

export default FirstNews