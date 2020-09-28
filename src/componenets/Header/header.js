import React, { Component } from 'react'

import './header.css'

import logo from '../../assest/logo.png'
import home from '../../assest/home.svg'
import arrow from '../../assest/arrow.svg'
import explorer from '../../assest/explorer.svg'
import like from '../../assest/like.svg'


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="inner">
                    <img src={logo} alt='logo' className="logo"/>
                    <input type='text' required placeholder="Поиск"/>
                    <div className="icon">
                        <img src={home} alt='home'/>
                        <img src={arrow} alt='arrow'/>
                        <img src={explorer} alt='explorer'/>
                        <img src={like} alt='like'/>
                    </div>
                </div>
            </div>
        )
    }
}
