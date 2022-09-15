import { Component } from 'react'
import axios from 'axios';
import main from '../styles/feed.module.css'
import Head from 'next/head'

import handlers from '../pages/api/postAPI'

export default class Post extends Component{
    state = {
        getIsLiked: '',
        setIsLiked: '',
    }
    componentDidMount = () =>{
        this.setState ({
            getIsLiked: window.localStorage.getItem(this.props.id)
        })
    }

    render () {
        let postImg = {
            'background-image': `url(${this.props.post})`,
        }
        let styles = {
            'background-image': `url(${this.props.profile_pic})`,
            'width': '30px',
            'height': '30px',
            'display': 'inline-block',
            'margin-right': '5px',
            'margin-top': '-5px',
            'border-radius': '50%'
        }
    
        let handleLike = () => {
            let likeBtn = document.getElementById(this.props.id);
            likeBtn.classList.toggle('liked')
            let classNames = document.getElementById(this.props.id).getAttribute('class')
            this.setState ({
                setIsLiked: window.localStorage.setItem(this.props.id, classNames)
            })

            classNames === 'liked' ? likeBtn.getElementsByTagName('h6')[0].innerHTML -= -1 : likeBtn.getElementsByTagName('h6')[0].innerHTML -= 1
        } 

        return (
    
            <>
                {/* Post (image) */}
                <div className='row'>
                    <div style={postImg} className={`card ${main.card}`}></div>
                </div>
    
                {/* Post info */}
                <div className={`row ${main.post_info}`}>
    
                    {/* profile pic & name */}
                    <p className={main.user}>
                        <div className={`${main.profile_pic}`} style={styles}></div>
                        <h6>{this.props.name}</h6>
                    </p>
    
                    {/* likes & comments */}
                    <p className={`${main.links_comments}`}>
                        <span id={this.props.id} className={this.state.getIsLiked} onClick={handleLike}>
                            <i className="fas fa-heart"></i> <h6>{this.props.likes}</h6>
                        </span>
                        <span id={main.comment}>
                            <i class="fas fa-comment-alt comment"></i> <h6>{this.props.comments}</h6>
                        </span>
                    </p>
                </div>
            </>
        )
    }
    
}
