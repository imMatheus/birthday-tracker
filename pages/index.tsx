import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    const [timeNow, setTimeNow] = useState(new Date())
    const [birthday, setBirthday] = useState(new Date(2021, 12, 18, 0, 0, 0))
    const [timeLeft, setTimeLeft] = useState(birthday.getTime() - timeNow.getTime())
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    console.log('timeNow ', timeNow)
    console.log('birthday ', birthday)
    console.log('timeNow ', timeNow.getTime())
    console.log('birthday ', birthday.getTime())

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeNow(new Date())
        }, 1000)
        console.log('interval: ', interval)
    }, [])

    useEffect(() => {
        const _seconds = 4 //Math.floor((birthday - timeNow) / 1000)
        const _minutes = Math.floor(_seconds / 60)
        const _hours = Math.floor(_minutes / 60)
        const _days = Math.floor(_hours / 24)
        console.log('_seconds : ', _seconds)
        console.log('_hours : ', _hours)
        console.log('_minutes : ', _minutes)
        console.log('_days : ', _days)

        setSeconds(_seconds)
        setMinutes(_minutes)
        setHours(_hours)
        setDays(_days)
    }, [timeNow, birthday])

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className={styles.centered}>
                {days}:{hours}:{minutes}:{seconds}
            </div>
        </div>
    )
}

export default Home
