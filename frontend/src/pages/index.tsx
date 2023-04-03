import styles from '../styles/Home.module.css'
import { Time } from '../features/clock/Time'
import { Suspense, useState } from 'react'

export default function Home() {
  const addTiles = ()=>{
    let tiles = [];
    let areas = "abcdefghi"
    for (let i = 0; i < 9; i++){
      tiles.push(<div style={{gridArea: areas[i]}} key={i} className={styles.board_tile}></div>)
    }
    return tiles;
  }

  return (
    <div className={styles.Home}>
      <h1>Date <Suspense fallback={null}> <Time /></Suspense> </h1>
      <div className={styles.board} >
        {addTiles().map((element)=> element)}
      </div>
    </div>
  )
}
