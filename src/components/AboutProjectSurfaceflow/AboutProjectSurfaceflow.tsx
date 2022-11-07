import './aboutprojectsurfaceflow.scss'
import { useTranslation } from 'react-i18next'

const AboutProjectSurfaceflow = (): JSX.Element => {
    const { t } = useTranslation()

    return (
        <div className='about_project-surface'>
            <div className='text_container'>
                <div className='header'>
                    <h1 className="mx-5 text">{t("surfaceflowis")}</h1>
                </div>
                <div className='description'>
                    <h4 className="mx-5 text">{t("surfaceflowdescription")}</h4>
                </div>
            </div>
        </div>
    );
};

export default AboutProjectSurfaceflow