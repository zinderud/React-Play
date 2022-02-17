import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navigation from '../components/navigation';
import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>


        <Navigation />

        <h1>Merhaba</h1>


      </div>
    </Layout>
  )
}
