import Head from 'next/head'
import Link from 'next/link'
import main from '../styles/aside.module.css'
import Links from './links'
import TopBar from './topBar'
import { useRouter } from 'next/router'

export default function Aside() {
    let router = useRouter();
  return (
    <>
        <TopBar />
        <div className={`row ${main.aside} ${main.asideF}`}>
            <div className='col-xs-12'>
                <div className='row'>
                    <h2 className={main.logo}>Cofeed</h2>
                </div>
                <div className='row'>
                    <h4 style={{'min-width': '100%'}}>Menu</h4>
                    <div className='row' style={{'width' : '100%'}}>
                        <Links />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
