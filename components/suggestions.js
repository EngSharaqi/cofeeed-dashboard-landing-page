import main from '../styles/rightSide.module.css'
export default function Suggestions (props) {
        let styles = {
            'background-image': `url(${props.profile_pic})`,
            'width': '40px',
            'display': 'inline-block',
            'height': '40px',
            'border-radius': '50%',
            'background-size': 'cover',
            'border': '2px solid #fff',
            'margin-right': '7px',
            'margin': '-4px 7px -4px 0 !important'
        }

        return(
        <>
            <div className={`row ${main.suggestions}`}>
                <div>
                    <div style={styles}></div>
                    <div style={{'display': 'inline-block'}}>
                        <h6>{props.name}</h6>
                        <p>{props.userName}</p>
                    </div>
                </div>
                <div className={`${main.isFollow}`}>
                    <button className = {props.isFollowed}>{ props.isFollowed === 'followed' ? 'Followed' : 'follow' }</button>
                </div>
            </div>
        </>
    );
}