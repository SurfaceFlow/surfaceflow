import avatar_alexkay from '../../images/avatar_alexkay.png'
import avatar_alkhimovmv from '../../images/avatar_alkhimovmv.png'
import './ourteam.scss'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion/dist/framer-motion'

const OurTeam = () => {
    const { t } = useTranslation()

    return (
        <motion.div className="py-5 our_team" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ easy: 'easyInOut', duration: 0.5 }}>
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-md-7 text-center">
                        <h1 className="mb-3">{t("Experienced & Professional Team")}</h1>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-lg-4 mb-4">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={avatar_alexkay} alt="AlexKay avatar" className="img-fluid rounded-circle" />
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="pt-2">
                                    <h5 className="mt-4 font-weight-medium mb-0">{t("Alexander Kaigorodov")}</h5>
                                    <h6 className="subtitle mb-3">{t("DS / MLOps / NLP engineer")}</h6>
                                    <p>{t("The project for the most brutal and effective language learning technique.")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={avatar_alkhimovmv} alt="Alkhimovmv avatar" className="img-fluid rounded-circle" />
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="pt-2">
                                    <h5 className="mt-4 font-weight-medium mb-0">{t("Maxim Alkhimov")}</h5>
                                    <h6 className="subtitle mb-3">{t("Frontend Developer")}</h6>
                                    <p>{t("A year from now you will wish you had started to learn a language today.")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default OurTeam;