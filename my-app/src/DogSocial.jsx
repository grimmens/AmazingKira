import { useState, useEffect } from 'react'
import './DogSocial.css'
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
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/dog-posts.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    console.log(data);

    return (
        <div className="dog-social">
            <div className="dog-logo-image">
                <img src='/images/DOG_SOCIAL_2.png' />
            </div>

            {data ? data.map(post => (
                <div key={post.id} className="dog-card">
                    <div className="card-header">
                        <div className="avatar">
                            {post.avatar ? (
                                <img src={post.avatar} alt={post.username} />
                            ) : '🐕'}
                        </div>
                        <div className="user-info">
                            <div className="username">{post.username}</div>
                            <div className="timestamp">
                                {post.timestamp}
                                {post.location && ` · ${post.location}`}
                            </div>
                        </div>
                    </div>

                    <div className="card-content">
                        <p className="post-text">{post.text}</p>
                    </div>

                    {post.image && (
                        <div className="card-image-full">
                            <img src={post.image} alt="Post image" />
                        </div>
                    )}

                    {(post.likes > 0 || post.reDogs > 0) && (
                        <div className="card-stats">
                            <div className="stat-item">
                                <span className="stat-number">{post.reDogs}</span>
                                <span className="stat-label">ReDogs</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">{post.likes}</span>
                                <span className="stat-label">Likes</span>
                            </div>
                        </div>
                    )}

                    <div className="card-actions">
                        <button className="action-btn" onClick={(e) => confetti('❤️', e)}>
                            <span className="icon">❤️</span>
                            <span>Like</span>
                        </button>
                        <button className="action-btn">
                            <span className="icon">💬</span>
                            <span>Bark</span>
                        </button>
                        <button className="action-btn">
                            <span className="icon">🔄</span>
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            )) : <div>Loading...</div>}
        </div>
  )
}

export default DogSocial