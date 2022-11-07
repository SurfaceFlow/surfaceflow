import './aboutprojectlangflow.scss'
import GoPractice from '../GoPractice/GoPractice'
import { useTranslation } from 'react-i18next'

const AboutProjectLangflow = (): JSX.Element => {
    const { t } = useTranslation()

    return (
        <div className='about_project-langflow'>
            <div className='mt-5 mb-3 text_container'>
                <div className='header'>
                    <h1 className="mx-5 text">{t("langflowis")}</h1>
                </div>
                <div className='description'>
                    <h4 className="mx-5 text">{t("langflowdescription")}</h4>
                </div>
            </div>
            <div className='gopractice_container shadow'>
                <GoPractice />
            </div>
        </div>
    );
};

export default AboutProjectLangflow