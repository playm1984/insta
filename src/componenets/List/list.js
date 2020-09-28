import React, { Component } from 'react'
import ListItem from '../ListItem/list-item'
import {connect} from 'react-redux'

import { delPost } from '../redux/action'

import './list.css'

class List extends Component {

    state = {
        popUp: false
    }

    render() {

        const {instaPost, delPost} =this.props;

        return (
            <div className='list'>
                {instaPost.map(item => {
                    const {id, ...itemProps} = item;
                    return(
                        <ListItem key={id} 
                            {...itemProps}
                            delPost={() => delPost(id)}/>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = ({instaPost}) => {
    return{
        instaPost
    }
}

const mapDispatchToProps = {
    delPost
}

export default connect (mapStateToProps, mapDispatchToProps)(List)