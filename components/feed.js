import { Component } from 'react'
import axios from 'axios'
import main from '../styles/feed.module.css'
import Post from './post'

export default class Feed extends Component{
    state = {
        post: []
    }
    
    componentDidMount = () => {
        var posts = [];

        axios.get("/api/postAPI") // I created a small api for this app!
        .then(res => {
            res.data.posts.map(res =>{
                posts.push(res);
                this.setState({ post: posts })                
            })
        }); 
    }

    render() {
        return (
            <>
                {/* Controls */}
                <div className={`row ${main.feed}`}>
                    <div className='col'>
                        <h6>Feeds</h6>
                    </div>
                    <div  className={`col ${main.controls}`}>
                        <ul>
                            <li><h6>All</h6></li>
                            <li><h6>Following</h6></li>
                            <li><h6>Newest</h6></li>
                            <li><h6>Popular</h6></li>
                        </ul>
                    </div>
                </div>

                {/* Post */}
                <div className='row'>
                    {this.state.post.map(res => <div className='col-xs-12 col-sm-6 col-md-12 col-lg-6'><Post post={res.post_img} profile_pic='https://placeholder.photo/img/20x20' name={res.name} likes={res.likes} comments={res.comments} isLiked='liked' id={res.id} /></div>)}
                </div>
            </>
        )
    }
}
