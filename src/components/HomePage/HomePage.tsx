import { useTranslation } from 'react-i18next'
import AboutProjectSurfaceflow from '../AboutProjectSurfaceflow/AboutProjectSurfaceflow'
import YoutubeVideo from '../YoutubeVideo/YoutubeVideo'
import Blog from '../Blog/Blog'
import InteractiveBlock from '../InteractiveBlock/InteractiveBlock'

const HomePage = (): JSX.Element => {
    const { t } = useTranslation()

    return (
        <>
            <AboutProjectSurfaceflow />
            <InteractiveBlock />
            <YoutubeVideo />
            <Blog />
        </>
    )
}

export default HomePage