import main from '../styles/stories.module.css'
import Story from './story'

export default function Stories () {
    return(
        <div className={`row ${main.stories}`}>
            <Story story_pic='https://placeholder.photo/img/220' />
            <Story story_pic='https://placeholder.photo/img/220' />
            <Story story_pic='https://placeholder.photo/img/220' />
            <Story story_pic='https://placeholder.photo/img/220' />
            <Story story_pic='https://placeholder.photo/img/220' />
            <Story story_pic='https://placeholder.photo/img/220' />
            <Story story_pic='https://placeholder.photo/img/220' />
            <Story story_pic='https://placeholder.photo/img/220' />
            <Story story_pic='https://placeholder.photo/img/220' />
        </div>
    )
} 