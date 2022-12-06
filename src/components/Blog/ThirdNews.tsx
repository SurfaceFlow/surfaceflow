import './news.scss'
import blog3 from '../../images/blog3.jpg'
import { useTranslation } from 'react-i18next'

const ThirdNews = (): JSX.Element => {
    const { t } = useTranslation()

    return (
        <div className='news'>
            <div className='news_header'>{t("headerthirdnews")}</div>
            <img
                src={blog3}
                alt="blog3"
                className='news_img'
            />
            <div className='news_description'>{t("textthirdnews")}</div>
        </div>
    );
};

export default ThirdNews