import main from '../styles/aside.module.css'
import Links from './links'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function TopBar() {
    let router = useRouter();
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light ${main.topbar}`}>
                <a className={`navbar-brand`} href="#" style={{ 'color': 'var(--mainColor)' }}>Cofeed Logo</a>
                <button className={`navbar-toggler ${main.downMenu}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i class="fas fa-bars"></i>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='col-xs-12'>
                        <div className='row'>
                            {/* Logo */}
                        </div>
                    </div>

                    <div className='row'>
                        <Links />
                    </div>

                    <form className={`form-inline my-2 my-lg-0 ${main.form}`}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}