import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Stories from '../components/stories'
import Feed from '../components/feed'

export default function Home() {
  return (
    <>
      <Stories />
      <Feed />
    </>
  )
}
