import './footer.scss'

import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import logo from '../../images/logo.png'
import PhoneIcon from '@mui/icons-material/Phone'
import MailIcon from '@mui/icons-material/Mail'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Link from '@material-ui/core/Link'
import { YMaps, Map, Placemark } from "react-yandex-maps"
import ReactTooltip from 'react-tooltip'

const Footer = (): JSX.Element => {
    const { t } = useTranslation()

    return (
        <footer className="footer">
            <div className="footer_container">
                <div style={{width: '35%', flexShrink: 0}}>
                    <div className='footer_logo'>
                        <div className='footer_logo-img'>
                            <img
                                width={70}
                                src={logo}
                                alt="surfaceflow logo"
                            />
                        </div>
                        <div className="footer_logo-name">SurfaceFlow</div>
                    </div>
                    <div className='footer_description'>{t("footerdescription")}</div>
                </div>
                <div style={{width: '15%', flexShrink: 0}}>
                    <Nav className="footer_nav-links">
                        <div className="footer_nav-header">{t("pages")}</div>
                        <NavLink className="footer_nav-link" to="/home">{t("home")}</NavLink>
                        <NavLink className="footer_nav-link" to="/ourteam">{t("ourteam")}</NavLink>
                        <NavLink className="footer_nav-link" to="/news">{t("blog")}</NavLink>
                        <NavLink className="footer_nav-link" to="/ourproducts">{t("ourproducts")}</NavLink>
                    </Nav>
                </div>
                <div style={{width: '24%', flexShrink: 0}}>
                    <Nav className="footer_nav-links">
                        <div className="footer_nav-header">{t("contacts")}</div>
                        <div className="footer_nav-contact">
                            <PhoneIcon sx={{ fontSize: 30, color: '#fff', marginRight: '15px' }}/>
                            <a data-tip data-for='callus' className="footer_nav-link" style={{fontSize: '16px'}} href="tel:+79175255095">+7(917) 525-50-95</a>
                            <ReactTooltip id='callus' place="bottom" type="dark" effect="float">{t("callus")}</ReactTooltip>
                        </div>
                        <div className="footer_nav-contact">
                            <MailIcon sx={{ fontSize: 30, color: '#fff', marginRight: '15px' }}/>
                            <a data-tip data-for='mailto' className="footer_nav-link" style={{fontSize: '16px'}} href="mailto:surfaceflow@gmail.com">surfaceflow@gmail.com</a>
                            <ReactTooltip id='mailto' place="bottom" type="dark" effect="float">{t("emailus")}</ReactTooltip>
                        </div>
                        <div className="footer_nav-contact" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <LocationOnIcon sx={{ fontSize: 30, color: '#fff', marginRight: '15px' }}/>
                            <div style={{color: '#fff', textAlign: 'center', fontSize: '16px'}}>{t("address")}</div>
                        </div>
                        <div className="footer_nav-contact" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Link data-tip data-for='gotogithub' href="https://github.com/SurfaceFlow" target="_blank" >
                                <GitHubIcon sx={{ fontSize: 30, color: '#fff', marginRight: '15px' }}/>
                            </Link>
                            <ReactTooltip id='gotogithub' place="bottom" type="dark" effect="float">{t("gotogithub")}</ReactTooltip>
                            <Link data-tip data-for='gotoyoutube' href="https://github.com/SurfaceFlow" target="_blank" >
                                <YouTubeIcon sx={{ fontSize: 30, color: '#fff', marginRight: '15px' }}/>
                            </Link>
                            <ReactTooltip id='gotoyoutube' place="bottom" type="dark" effect="float">{t("gotoyoutube")}</ReactTooltip>
                        </div>
                    </Nav>
                </div>
                <div style={{width: '26%', flexShrink: 0}}>
                    <Nav className="footer_nav-links">
                        <div className="footer_nav-header">{t("mapslocation")}</div>
                        <YMaps query={{lang: 'en_US'}}>
                            <Map defaultState={{ center: [55.710855, 37.784904], zoom: 12 }} width="270px" height="150px" >
                                <Placemark geometry={[55.710855, 37.784904]}/>
                            </Map>
                        </YMaps>
                    </Nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer