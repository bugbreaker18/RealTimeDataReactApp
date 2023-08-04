"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect } from 'react'
import { resolve } from 'styled-jsx/css';

export default function Home() {
  const [stockinfo, setstockinfo] = useState([])

  useEffect(() => {
    async function getInfo() {
      try {
        const APIKEY = "k985HL_5YmEOk4aGnZK3vEs7z4YnR9LO"
        const data = await fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/minute/2023-08-03/2023-08-04?adjusted=true&sort=asc&limit=120&apiKey=${APIKEY}`)
        const jsonData = await data.json()
        setstockinfo(jsonData.results)
      } catch (error) {
        console.error(error)
      }
    }
    getInfo()
  }, [])




  useEffect(() => {
    console.log("Hey, now i am in a state", stockinfo)

  }, [stockinfo])
  //
  //  code
  //
  return (
    <main className={styles.main}>
      <h1>Hello World!</h1>
    

    </main>
  )
}
