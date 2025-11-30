import { useState } from 'react'
import kira from './assets/kira.jpeg'
import boner from './assets/Boner_Button.svg'

import JSConfetti from 'js-confetti'
import './AmazingKira.css'



function AmazingKira() {
  const [count, setCount] = useState(0)
  const jsConfetti = new JSConfetti()
  
function incrementCounter() {
  setCount(count => count + 1);
  sprinkle()
}
function sprinkle() {
    let emoji;
    if(count % 5 == 0) {
      emoji = '🦴'
    }
    if(count % 5 == 1) {
      emoji = '🌭'
    }
    if(count % 5 == 2) {
      emoji = '🧸'
    }
    if(count % 5 == 3) {
      emoji = '🥩'
    }
    if(count % 5 == 4) {
      emoji = '🍖'
    }
    jsConfetti.addConfetti({
      emojis: [emoji],
      emojiSize: 200,
      confettiNumber: 3,
      confettiDispatchPosition: {
        x: event.clientX,
        y: 0
      }
    }).then(() => {
      jsConfetti.clearCanvas() 
      console.log('cleared canvas')
    })
  }

  return (
    <>
      <div>
        <img src={kira} className="logo react" alt="Amazing Kirer" />
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Amazing Kirer</h1>
      <div className="card">
        This is the Blog of amazing Kira. The Dog is the most amazing animal ever to live. She loves Würstel, and is always looking for a snack.
        Click this button to give Kira a snack.
        <br/>
        <button onClick={() => incrementCounter()}>
          Kiras Snack Count is {count}
          <br/>
          <img className="paw" src={boner} />
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        <a href="/blog">Click here</a> to explore more about the life of Kira.
      </p>
    </>
  )
}

export default AmazingKira
