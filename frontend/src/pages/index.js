import styles from '@/styles/Home.module.css'
import { Time } from '@/features/clock/Time'
import { Suspense } from 'react'

export default function Home() {
  return (
    <h1>Date <Suspense fallback={null}> <Time /></Suspense> </h1>
  )
}
