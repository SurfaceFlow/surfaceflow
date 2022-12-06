import './blog.scss'
import FirstNews from './FirstNews'
import SecondNews from './SecondNews'
import ThirdNews from './ThirdNews'

const News = (): JSX.Element => {
    return (
        <div style={{ padding: '0 65px' }}>
            <FirstNews />
            <hr />
            <SecondNews />
            <hr />
            <ThirdNews />
        </div>
    );
};

export default News