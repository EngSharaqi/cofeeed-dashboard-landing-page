import main from '../styles/feed.module.css'

export default function Post(props) {
    let styles = {
        'background-image': `url(${props.profile_pic})`,
        'width': '20px',
        'height': '20px',
        'display': 'inline-block',
        'margin-right': '5px'
    }
    return (
        <>
            {/* Post (image) */}
            <div className='row'>
                <div className={`card ${main.card}`}></div>
            </div>

            {/* Post info */}
            <div className={`row ${main.post_info}`}>

                {/* profile pic & name */}
                <p className={main.user}>
                    <div className={`${main.profile_pic}`} style={styles}></div>
                    <h6>{props.name}</h6>
                </p>

                {/* likes & comments */}
                <p className={`${main.links_comments}`}>
                    <span id='like' className={props.isLiked}>
                        <i className="fas fa-heart"></i> <h6>{props.likes}</h6>
                    </span>
                    <span id={main.comment}>
                        <i class="fas fa-comment-alt comment"></i> <h6>{props.comments}</h6>
                    </span>
                </p>
            </div>
        </>
    )
}
