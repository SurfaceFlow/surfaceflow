import cn from 'classnames'

import { Router, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Question from '../Question/Question'
import HomePage from '../HomePage/HomePage'
import RegistrationPage from '../RegistrationPage/RegistrationPage'
import LoginPage from '../LoginPage/LoginPage'
import Header from '../Header/Header'
import OurTeam from '../OurTeam/OurTeam'
import OurProducts from '../OurProducts/OurProducts'
import Blog from '../Blog/Blog'
import FirstNews from '../Blog/FirstNews'
import SecondNews from '../Blog/SecondNews'
import ThirdNews from '../Blog/ThirdNews'
import News from '../Blog/News'
import Footer from '../Footer/Footer'
import AnimatedRoutes from '../AnimatedRoutes/AnimatedRoutes'
import './currentpage.scss'

import { history } from '../helpers/history'

const CurrentPage = () => {
    const isQuestionPage = window.location.pathname === '/question'
    const classes = cn({ 'min-vh-100': isQuestionPage }, 'text-center')

    return (
        <Router history={history}>
            <div style={{background: '#edf0f2'}} className={classes}>
                <div style={{ boxShadow: '0 0 8px rgb(0 0 0 / 30%)', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh' }} className='bg-light'>
                    <Header/>
                    <div className={'container_current-page'}>
                        <AnimatedRoutes />
                    </div>
                    <Footer/>
                </div>
            </div>
        </Router>
    )
}

export default CurrentPage