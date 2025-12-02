import { useState } from 'react'
import boner from './assets/Boner_Button.svg'
import JSConfetti from 'js-confetti'
import './AmazingKira.css'

function AmazingKira() {
  const [count, setCount] = useState(0)
  const jsConfetti = new JSConfetti()
  
  function incrementCounter(event) {
    setCount(count => count + 1)
    sprinkle(event)
  }

  function sprinkle(event) {
    const emojis = ['🦴', '🌭', '🧸', '🥩', '🍖']
    const emoji = emojis[count % 5]
    
    jsConfetti.addConfetti({
      emojis: [emoji],
      emojiSize: 200,
      confettiNumber: 3,
      confettiDispatchPosition: {
        x: event?.clientX || window.innerWidth / 2,
        y: 0
      }
    }).then(() => {
      jsConfetti.clearCanvas() 
    })
  }

  return (
    <div className="amazing-kira">
      <img 
        src='/images/kira.jpeg' 
        className="logo" 
        alt="Kira" 
      />
      
      <h1>Amazing Kira</h1>

      <div className="card">
        <p>
          This is the blog of Amazing Kira. She loves würstel and is always looking for a snack.
        </p>
        <p className="instruction">Click the button to give Kira a snack!</p>

        <button className="snack-button" onClick={(e) => incrementCounter(e)}>
          <span className="count-number">Kiras Snack Count is {count}</span>
          <img className="paw" src={boner} alt="Give snack" />
        </button>
      </div>

      <p className="blog-link-text">
        <a href="/dogsocial">Explore Dog Social</a>
      </p>
    </div>
  )
}

export default AmazingKira