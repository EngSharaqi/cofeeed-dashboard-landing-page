import main from '../styles/feed.module.css'
import Post from './post'
export default function Feed() {
    return (
        <>
            {/* Controls */}
            <div className={`row ${main.feed}`}>
                <div className='col'>
                    <h6>Feeds</h6>
                </div>
                <div className='col'>
                    <ul>
                        <li>
                            <h6>All</h6>
                        </li>
                        <li>
                            <h6>Following</h6>
                        </li>
                        <li>
                            <h6>Newest</h6>
                        </li>
                        <li>
                            <h6>Popular</h6>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Post */}
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <Post post='' profile_pic='https://placeholder.photo/img/20x20' name='Mohamed Sharaqi' likes='94' comments='24' isLiked='liked' />
                </div>

                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <Post post='' profile_pic='https://placeholder.photo/img/20x20' name='Abdelhamid Elbasuny' likes='35' comments='20' isLiked = '' />
                </div>

                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <Post post='' profile_pic='https://placeholder.photo/img/20x20' name='Sayed Ahmed' likes='40' comments='56' isLiked = '' />
                </div>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <Post post='' profile_pic='https://placeholder.photo/img/20x20' name='Rizk' likes='13' comments='75' isLiked = 'liked' />
                </div>
            </div>

        </>
    )
}
