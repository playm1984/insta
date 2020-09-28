import React, { Component } from 'react'
import {connect} from 'react-redux'

import './add-post.css'

import { addPost } from '../redux/action'

class AddPost extends Component {

    state={
        post: '',
        link: '',
        user: ''
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value 
        })
    }

    render() {
        const { post, link, user } = this.state;
        const { addPost, edit } = this.props;

        return (
            <div className='add-post'>
                {edit ? 
                <form className="inner-add" onSubmit = {(e) => { 
                                    addPost({ post, link, user })
                                    e.preventDefault() 
                                    }}>
                    <p>Add Post</p>
                    <input type="text" name='user' required placeholder="Введите пользователя." onChange = {this.handleChange}/>
                    <input type="text" name='link' required placeholder="Введите ссылку."onChange = {this.handleChange} />
                    <input type="text" name='post' required placeholder="Введите описание."onChange = {this.handleChange} />
                    <button>Опубликовать пост</button>
                </form>
                :
                <form className="inner-add" onSubmit = {(e) => { 
                                    addPost({ post, link, user })
                                    e.preventDefault() 
                                    }}>
                    <p>Edit Post</p>
                    <input type="text" name='user' required placeholder="Исправьте пользователя." onChange = {this.handleChange}/>
                    <input type="text" name='post' required placeholder="Исправьте описание."onChange = {this.handleChange} />
                    <button>Опубликовать пост</button>
                </form>}           
            </div>
        )
    }
}

const mapDispatchToProps = {
    addPost
}

const mapStateToProps = ({edit}) => {
    return{ edit }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddPost)
