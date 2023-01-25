import React from 'react'
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
import { AnimatePresence } from 'framer-motion/dist/framer-motion'

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
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
        </AnimatePresence>
    )
}

export default AnimatedRoutes