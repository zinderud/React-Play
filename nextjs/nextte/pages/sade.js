import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navigation from '../components/navigation';
import Layout from '../components/Layout';
export default function sade() {
    return (
        <Layout>
            <div className={styles.container}>
                <Navigation />
                <h1>Sade sayfa</h1>


            </div>
        </Layout >
    )
}
