import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    const [timeNow, setTimeNow] = useState(new Date())
    const [birthday, setBirthday] = useState(new Date('18 November 2021'))
    const [isZero, setIsZero] = useState(false)
    const [days, setDays] = useState<number | String>(0)
    const [timeInterval, setTimeInterval] = useState<any>()
    const [hours, setHours] = useState<number | String>(0)
    const [minutes, setMinutes] = useState<number | String>(0)
    const [seconds, setSeconds] = useState<number | String>(0)
    const iconsArray = useRef([...Array(100)].map(() => Math.random()))

    useEffect(() => {
        if (true) {
            setSeconds('00')
            setMinutes('00')
            setHours('00')
            setDays('00')
            setIsZero(true)
            clearInterval(timeInterval)
        }
    }, [timeNow, birthday, timeInterval])

    return (
        <div className={styles.container}>
            <Head>
                <title>CONGRATULATIONS🎉🥳🎊</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {isZero &&
                iconsArray.current.map((num, index) => {
                    const icons = ['🎉', '🥳', '🎊']
                    return (
                        <div className={styles.icon} key={index}>
                            {icons[Math.floor(num * icons.length)]}
                        </div>
                    )
                })}
            <div className={styles.centered}>
                <div className={styles.box}>{days}</div>:
                <div className={styles.box}>{hours}</div>:
                <div className={styles.box}>{minutes}</div>:
                <div className={styles.box}>{seconds}</div>
            </div>
        </div>
    )
}

export default Home
