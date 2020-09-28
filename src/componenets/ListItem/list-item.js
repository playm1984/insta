import React, { Component } from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { VscComment } from 'react-icons/vsc'

import logo from '../../assest/insta.svg'
import dote from '../../assest/dote.svg'

import PopUp from '../DelPopUp'

import './list-item.css'
import { delPost } from '../redux/action'

export default class ListItem extends Component {

    state={
        popUp: false,
        like: false,
        input: '',
        data: [],
        id: 0
    }

    handleChange = (e) =>{
        this.setState({
            input: e.target.value
        })
    }

    addCom = (e) => {
        e.preventDefault()
        const newItem = {
            comment: this.state.input,
            id: this.state.id++,
            likeComment: false
        };
        this.setState(({data})=>{
            const newArr = [...data, newItem];
            return{
                data: newArr
            }
        })
    }

    onToggle = () => {
        this.setState({
            popUp: !this.state.popUp
        }) 
    }

    onLike = () => {
        this.setState({
            like: !this.state.like
        }) 
    }

    onLikeComment = () => {
        this.setState({
            likeComment: !this.state.data[0].likeComment  
        }) 
    }

    render() {
        const {popUp, like, data } = this.state;
        const { user, link, post, delPost } = this.props;


        console.log(this.state.data)
    //    user==='' ? alert() : alert('q')
    
        
        return (
            <div className='list-item'>
                {popUp ? <PopUp delPost={delPost}/> : null} 
               <div className="head">
                   <div className="head-inner">
                        <img src={logo} alt="log"/>
                        <span>{user}</span>
                   </div>
                   <img src={dote} alt="dote" className="dote" onClick={this.onToggle}/>
               </div>
               <div className="image">
                   <img  src={link} alt="image"/>
               </div>
               <div className="footer">
                   <div className="post">
                        { like ? <FcLike onClick={this.onLike} className='like'/> : <FcLikePlaceholder onClick={this.onLike} className='like'/> } 
                        <VscComment className='comIcon'/>
                        <span>{post}</span>
                   </div>  
                   <div className='comment'>
                        {data.map((item) => {
                            const {id, comment} = item;
                            return(
                                <div key={id}>
                                    <span >{comment}</span>
                                    <FcLike onClick={this.onLikeComment} />
                                </div>
                            )
                        })}
                   </div>
               </div>
               <div className="add">
                       <input type="text" placeholder="Добавьте комментарий..." required onChange={this.handleChange}/>
                       <input type="button" value="Опубликовать" onClick = {this.addCom}/>
                </div>
            </div>
        )
    }
}
