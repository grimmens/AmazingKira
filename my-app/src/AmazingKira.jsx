import { useState } from 'react'
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
      <div class="amazing-kira">
        <img src='/images/kira.jpeg' className="logo react" alt="Amazing Kirer" />
        
      </div>
      <h1>Amazing Kira</h1>
      <div className="card">
        This is the Blog of amazing Kira. The Dog is the most amazing animal ever to live. She loves Würstel, and is always looking for a snack.
        Click this button to give Kira a snack.
        <br/>
        <button onClick={() => incrementCounter()}>
          Kiras Snack Count is {count}
          <br/>
          <img className="paw" src={boner} />
        </button>
        
      </div>
      <p className="read-the-docs">
        <a href="/blog">Click here</a> to explore more about the life of Kira.
      </p>
    </>
  )
}

export default AmazingKira
