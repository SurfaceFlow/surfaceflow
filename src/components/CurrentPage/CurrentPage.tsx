import cn from 'classnames'

import { Router, Switch, Route, Redirect } from 'react-router-dom'
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
import './currentpage.scss'

import { history } from '../helpers/history'

const CurrentPage = () => {
    const isQuestionPage = window.location.pathname === '/question'
    const classes = cn({ 'min-vh-100': isQuestionPage }, 'text-center')

    return (
        <Router history={history}>
            <div style={{background: '#edf0f2'}} className={classes}>
                <div style={{ boxShadow: '0 0 8px rgb(0 0 0 / 30%)', maxWidth: '1230px', margin: '0 auto', minHeight: '100vh' }} className='bg-light'>
                    <Header/>
                    <div className={'container_current-page'}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route path='/ourteam' component={OurTeam} />
                            <Route path='/question' component={Question} />
                            <Route path='/registration' component={RegistrationPage} />
                            <Route path='/login' component={LoginPage} />
                            <Route path='/ourproducts' component={OurProducts} />
                            <Route path='/blog' component={Blog} />
                            <Route path='/firstnews' component={FirstNews} />
                            <Route path='/secondnews' component={SecondNews} />
                            <Route path='/thirdnews' component={ThirdNews} />News
                            <Route path='/news' component={News} />

                            <Redirect from='/' to='/home'/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </div>
        </Router>
    )
}

export default CurrentPage