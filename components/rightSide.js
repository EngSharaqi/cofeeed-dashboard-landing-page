import { Component } from 'react'
import Link from 'next/link'
import main from '../styles/rightSide.module.css'
import Suggestions from './suggestions'

export default class RightSide extends Component {
    render () {
        return (
            <>
                <div className={main.rightSide}>
                    <div className={`row ${main.actions}`}>
                        <form className={`form-inline my-2 my-lg-0 ${main.form}`}>
                            <i class="fas fa-search"></i>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div className={main.notf}>
                            <Link href='notfications'>
                                <a>
                                    <i class="fas fa-bell"></i>
                                </a>
                            </Link>
    
                        </div>
                        <div className={main.post}>
                            <Link href='post'>
                                <a>
                                    <i class="fas fa-cloud-upload-alt"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className={`row ${main.txt}`}>
                                <h6>Suggestions for you</h6>
                                <h6>
                                    <Link href='#'>
                                        <a>See All</a>
                                    </Link>
                                </h6>
                        </div>
                        <div className={`row ${main.suggestionsList}`}>
                            <Suggestions profile_pic='https://placeholder.photo/img/50x50' name='Sarah Tancentie' userName='@dr.sarah' className='unFollowed' id='sug1' />
                            <Suggestions profile_pic='https://placeholder.photo/img/40x40' name='Ibrahim Essam' userName='@ibrahimessam' className='followed' id='sug2' />
                            <Suggestions profile_pic='https://placeholder.photo/img/50x50' name='Yahia Shady' userName='@Eng.yahia' className='followed' id='sug3' />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}