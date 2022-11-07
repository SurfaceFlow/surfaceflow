import './blog.scss'
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/blog3.png'
import { useTranslation } from 'react-i18next'

const Blog = (): JSX.Element => {
    const { t } = useTranslation()

    return (
        <div className='blog'>
            <a className='blog_item'>
                <img
                    src={blog1}
                    alt="blog1"
                    className='blog_img'
                />
                <div className='blog_text'>
                    <div className='blog_header'>Header 1 news</div>
                    <div className='blog_description'>Description 1 news Description 1 news Description 1 news Description 1 news</div>
                    <a className='blog_more'>More...</a>
                </div>
            </a>
            <a className='blog_item'>
                <img
                    src={blog2}
                    alt="blog2"
                    className='blog_img'
                />
                <div className='blog_text'>
                    <div className='blog_header'>Header 2 news</div>
                    <div className='blog_description'>Description 2 news Description 2 news Description 2 news Description 2 news</div>
                    <a className='blog_more'>More...</a>
                </div>
            </a>
            <a className='blog_item'>
                <img
                    src={blog3}
                    alt="blog3"
                    className='blog_img'
                />
                <div className='blog_text'>
                    <div className='blog_header'>Header 3 news</div>
                    <div className='blog_description'>Description 3 news Description 3 news Description 3 news Description 3 news</div>
                    <a className='blog_more'>More...</a>
                </div>
            </a>
        </div>
    );
};

export default Blog