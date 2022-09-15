import main from '../styles/stories.module.css'

export default function Story (props) {
    let styles = {
        'background-image': `url(${props.story_pic})`
    }
    
    return <div className={`${main.pics}`} style={styles}></div>
} 