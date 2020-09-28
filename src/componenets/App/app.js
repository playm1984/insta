import React, { Component } from 'react'
import Header from '../Header'
import List from '../List'
import AddPost from '../AddPost'

import './app.css'

export default class App extends Component {

    render() {
        return (
            <div className='app'>
                <Header/>
                <div className="main">
                    <List/>
                    <AddPost/>
                </div>
            </div>
        )
    }
}
