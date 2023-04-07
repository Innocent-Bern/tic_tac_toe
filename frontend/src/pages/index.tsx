import styles from '../styles/Home.module.css'
import { Suspense, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Time } from '../features/clock/Time'
import { 
  whole_board,
  tile_a, tile_b, tile_c,
  tile_d, tile_e, tile_f,
  tile_g, tile_h, tile_i} from '../features/BoardTile/boardTileSlice'

export default function Home() {
  const tile_A = useSelector((state) => state.boardTile.tile_a)
  const tile_B = useSelector((state) => state.boardTile.tile_b)
  const tile_C = useSelector((state) => state.boardTile.tile_c)
  const tile_D = useSelector((state) => state.boardTile.tile_d)
  const tile_E = useSelector((state) => state.boardTile.tile_e)
  const tile_F = useSelector((state) => state.boardTile.tile_f)
  const tile_G = useSelector((state) => state.boardTile.tile_g)
  const tile_H = useSelector((state) => state.boardTile.tile_h)
  const tile_I = useSelector((state) => state.boardTile.tile_i)
  const dispatch = useDispatch()

  const handleBoardClick = ()=>{
    console.log(tile_A)
  }
  return (
    <div className={styles.Home}>
      <h1>Date <Suspense fallback={null}> <Time /></Suspense> </h1>
      <div onClick={()=>dispatch(whole_board())} className={styles.board}>
        <div 
          onClick={()=>dispatch(tile_a())} 
          style={{gridArea: "a"}}  
          className={styles.board_tile}> {tile_A.val} </div>

        <div 
          onClick={()=>dispatch(tile_b())} 
          style={{gridArea: "b"}} 
          className={styles.board_tile}> {tile_B.val} </div>
        <div 
          onClick={()=>dispatch(tile_c())} 
          style={{gridArea: "c"}}  
          className={styles.board_tile}> {tile_C.val} </div>
        <div 
          onClick={()=>dispatch(tile_d())} 
          style={{gridArea: "d"}}  
          className={styles.board_tile}> {tile_D.val} </div>
        <div 
          onClick={()=>dispatch(tile_e())} 
          style={{gridArea: "e"}}  
          className={styles.board_tile}> {tile_E.val} </div>
        <div 
          onClick={()=>dispatch(tile_f())} 
          style={{gridArea: "f"}}  
          className={styles.board_tile}> {tile_F.val}</div>
        <div 
          onClick={()=>dispatch(tile_g())} 
          style={{gridArea: "g"}}  
          className={styles.board_tile}> {tile_G.val}</div>
        <div 
          onClick={()=>dispatch(tile_h())} 
          style={{gridArea: "h"}} 
          className={styles.board_tile}> {tile_H.val}</div>
        <div 
          onClick={()=>dispatch(tile_i())} 
          style={{gridArea: "i"}}  
          className={styles.board_tile}> {tile_I.val} </div>
      </div>
    </div>
  )
}
