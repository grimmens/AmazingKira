import { useState } from 'react'
import './DogSocial.css'
import post1Image from './assets/IMG_4095.jpg'
import imageChristmasTree from './assets/IMG_3973.jpeg'
import kiraAvatar from './assets/kira_avatar.png'
import kiraAvatar3 from './assets/kira_avatar3.png'

import JSConfetti from 'js-confetti'



function DogSocial() {
    const jsConfetti = new JSConfetti()

    function confetti(icon) {
    jsConfetti.addConfetti({
            emojis: [icon],
            confettiNumber: 10,
        })
    jsConfetti.addConfetti({
      emojis: [icon],
      emojiSize: 100,
      confettiNumber: 3,
      confettiDispatchPosition: {
        x: event.clientX,
        y: 0
      }
    })
    }

    return (
        <div class="dog-social">
            <h1>Dog Social</h1>
            <div class="dog-card">
                <div class="card-header">
                    <div class="avatar">
                        {kiraAvatar ? <img src={kiraAvatar} alt="Kirer" /> : '🐕'}
                    </div>
                    <div class="user-info">
                        <div class="username">Kira</div>
                        <div class="timestamp">Just now · 🦴</div>
                    </div>
                </div>

                <div className="card-content">
                    <p className="post-text">
                        Today I decorated the Christmas Tree! What an amazing work of art! I am truly a stable genius. When I unpack the packages I expect steak under the tree... wish me luck 🐾
                    </p>
                </div>
                <div className="card-image-full">
                    <img src={imageChristmasTree} alt="Post image" />
                </div>
                <div class="card-actions">
                    <button class="action-btn" onClick={() => confetti('❤️')}>
                        <span class="icon">❤️</span>
                        <span>Like</span>
                    </button>
                    <button class="action-btn">
                        <span class="icon">💬</span>
                        <span>Bark</span>
                    </button>
                    <button class="action-btn">
                        <span class="icon">🔄</span>
                        <span>Share</span>
                    </button>
                </div>
            </div>
            <div class="dog-card">
                <div class="card-header">
                    <div class="avatar">
                        {kiraAvatar ? <img src={kiraAvatar} alt="Kirer" /> : '🐕'}
                    </div>
                    <div class="user-info">
                        <div class="username">Kira</div>
                        <div class="timestamp">Just now · 🦴</div>
                    </div>
                </div>

                <div className="card-content">
                    <p className="post-text">
                        I love Würstel. I am the best dog in the world! 🐾
                    </p>
                </div>
                <div class="card-actions">
                    <button class="action-btn" onClick={() => confetti('❤️')}>
                        <span class="icon">❤️</span>
                        <span>Like</span>
                    </button>
                    <button class="action-btn">
                        <span class="icon">💬</span>
                        <span>Bark</span>
                    </button>
                    <button class="action-btn">
                        <span class="icon">🔄</span>
                        <span>Share</span>
                    </button>
                </div>
            </div>
            <div class="dog-card">
                <div class="card-header">
                    <div className="avatar">
                        {kiraAvatar ? <img src={kiraAvatar} alt="Kirer" /> : '🐕'}
                    </div>
                    <div class="user-info">
                        <div class="username">Kira</div>
                        <div class="timestamp">Just now · 🦴</div>
                    </div>
                </div>

                <div class="card-content">
                    <p class="post-text">
                        That moment when the Würstel falls from the table… gravity is amazing. 😏
                    </p>
                </div>

                <div class="card-actions">
                    <button class="action-btn" onClick={() => confetti('❤️')}>
                        <span class="icon">❤️</span>
                        <span>Like</span>
                    </button>
                    <button class="action-btn">
                        <span class="icon">💬</span>
                        <span>Bark</span>
                    </button>
                    <button class="action-btn">
                        <span class="icon">🔄</span>
                        <span>Share</span>
                    </button>
                </div>
            </div>
            <div class="dog-card">
                <div class="card-header">
                    <div className="avatar">
                        {kiraAvatar ? <img src={kiraAvatar} alt="Kirer" /> : '🐕'}
                    </div>
                    <div class="user-info">
                        <div class="username">Kira</div>
                        <div class="timestamp">Last Week · 🦴 · 📍 Lemböckgasse 61, Vienna</div>
                    </div>
                </div>
                <div class="card-content">
                    <p class="post-text">
                        I love Steak and Würstel😏. Today I searched for it in Lemböckgasse 61, and I could not find any Würstel... I don't like being on a diet.
                    </p>
                </div>
                <div class="card-actions">
                    <button class="action-btn" onClick={() => confetti('❤️')}>
                        <span class="icon">❤️</span>
                        <span>Like</span>
                    </button>
                    <button class="action-btn">
                        <span class="icon">💬</span>
                        <span>Bark</span>
                    </button>
                    <button class="action-btn">
                        <span class="icon">🔄</span>
                        <span>Share</span>
                    </button>
                </div>
            </div>
            <div class="dog-card">
                <div class="card-header">
                    <div class="avatar">
                        {kiraAvatar3 ? <img src={kiraAvatar3} alt="Kirer" /> : '🐕'}
                    </div>
                    <div class="user-info">
                        <div class="username">Kira</div>
                        <div class="timestamp">July 17th, 2025 · 🦴 · 📍 Lemböckgasse 61, Vienna</div>
                    </div>
                </div>

                <div className="card-content">
                    <p className="post-text">
                        Today I was very productive at work. Now I am chilling in the sun and having a bite of my favorite teddy bear #Doglife  🐾
                    </p>
                </div>
                {post1Image && (
                        <div className="card-image-full">
                            <img src={post1Image} alt="Post image" />
                        </div>
                    )}

                <div class="card-actions">
                    <button class="action-btn" onClick={() => confetti('❤️')}>
                        <span class="icon">❤️</span>
                        <span>Like</span>
                    </button>
                    <button class="action-btn">
                        <span class="icon">💬</span>
                        <span>Bark</span>
                    </button>
                    <button class="action-btn">
                        <span class="icon">🔄</span>
                        <span>Share</span>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default DogSocial