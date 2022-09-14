import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Stories from '../components/stories'
import Feed from '../components/feed'

import testImg from '../public/test.png'
export default function Home() {
  return (
    <>
      <Stories />
      <Feed />
      <img style={{'max-width': '100%'}} src={testImg.src} />
    </>
  )
}
