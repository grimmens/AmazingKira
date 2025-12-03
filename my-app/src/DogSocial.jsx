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
    // Store likes and reDogs in a state object indexed by post ID
    const [postStats, setPostStats] = useState({});

    useEffect(() => {
        fetch('/dog-posts.json')
            .then(response => response.json())
            .then(data => {
                setData(data)
                // Initialize postStats with likes and reDogs from data
                const initialStats = {};
                data.forEach(post => {
                    initialStats[post.id] = {
                        likes: post.likes,
                        reDogs: post.reDogs
                    };
                });
                setPostStats(initialStats);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleLike = (postId, event) => {
        confetti('❤️', event);
        setPostStats(prev => ({
            ...prev,
            [postId]: {
                ...prev[postId],
                likes: prev[postId].likes + 1
            }
        }));
    };

    const handleReDog = (postId, event) => {
        // confetti('🔄', event);
        setPostStats(prev => ({
            ...prev,
            [postId]: {
                ...prev[postId],
                reDogs: prev[postId].reDogs + 1
            }
        }));
    };

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
                        <p className="post-text"><div dangerouslySetInnerHTML={{ __html: post.text }} /></p>
                        {/* Add tags section */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="post-tags">
                                {post.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                        )}
                    </div>
                    

                    {post.image && (
                        <div className="card-image-full">
                            <img src={post.image} alt="Post image" />
                        </div>
                    )}

                    {postStats[post.id] && (postStats[post.id].likes > 0 || postStats[post.id].reDogs > 0) && (
                        <div className="card-stats">
                            <div className="stat-item">
                                <span className="stat-number">{postStats[post.id].reDogs}</span>
                                <span className="stat-label">ReDogs</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">{postStats[post.id].likes}</span>
                                <span className="stat-label">Likes</span>
                            </div>
                        </div>
                    )}

                    <div className="card-actions">
                        <button className="action-btn" onClick={(e) => handleLike(post.id, e)}>
                            <span className="icon">❤️</span>
                            <span>Like</span>
                        </button>
                        <button className="action-btn">
                            <span className="icon">💬</span>
                            <span>Bark</span>
                        </button>
                        <button className="action-btn" onClick={(e) => handleReDog(post.id, e)}>
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