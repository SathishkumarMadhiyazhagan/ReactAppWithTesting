import React from 'react'
import { Counter, Header } from '../components'

export const HomePage = () => {
  return (
    <main>
        <Header heading="Word Counter" subHeading="Free online character and word counter tool"/>
        <Counter />
    </main>
  )
}
