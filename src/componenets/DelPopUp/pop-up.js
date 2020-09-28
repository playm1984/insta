import React, { Component } from 'react'
import {connect} from 'react-redux'

import { addEdit, addPost } from '../redux/action'

import './pop-up.css'

class PopUp extends Component {
    render() {

        const {delPost, addEdit} = this.props
        
        return (
            <div className='pop-up' >
                <span onClick={addEdit}>Редактировать</span>
                <span onClick={delPost}>Удалить</span>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return{ }
}

const mapDispatchToProps = {
    addEdit
}

export default connect (mapStateToProps, mapDispatchToProps)(PopUp)

