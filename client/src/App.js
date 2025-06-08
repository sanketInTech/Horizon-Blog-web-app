import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ArticleCard from './components/ArticleCard';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const articles = [
    {
      id: 1,
      title: "Apple Unveils Revolutionary AI-Powered iPhone 16",
      description: "Apple has announced its latest iPhone 16 series with groundbreaking AI features. The new Neural Engine can process 38 trillion operations per second, enabling real-time language translation and advanced photo editing. The device also features a new titanium design and improved battery life.",
      image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=800&auto=format&fit=crop&q=60",
      time: "2 hours ago"
    },
    {
      id: 2,
      title: "Global Climate Summit: 195 Nations Sign Historic Agreement",
      description: "World leaders have reached a landmark agreement at the UN Climate Summit, committing to reduce carbon emissions by 50% by 2030. The deal includes $100 billion in climate financing for developing nations and establishes strict monitoring mechanisms.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60",
      time: "5 hours ago"
    },
    {
      id: 3,
      title: "Champions League Final: Real Madrid vs Manchester City",
      description: "In a thrilling Champions League final, Real Madrid secured their 15th European title with a 3-2 victory over Manchester City. The match, played at Wembley Stadium, saw record-breaking attendance and global viewership numbers.",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/real-madrid-vs-manchester-city-football-match-design-template-b109e3e435401fbd900f3744a71462ad_screen.jpg?ts=1684286308",
      time: "1 day ago"
    },
    {
      id: 4,
      title: "Oscar-Winning Director Announces New Sci-Fi Epic",
      description: "Academy Award-winning director Christopher Nolan has revealed details about his upcoming sci-fi film 'Horizon'. The $200 million project, starring A-list actors, will explore themes of artificial intelligence and human consciousness.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60",
      time: "2 days ago"
    }
  ];

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-content">
            <div className="header-left">
              <button aria-expanded="false" aria-label="Open menu" className="menu-button">
                <svg width="50" height="30" viewBox="0 0 80 48" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M66.8517 32.0842C68.5359 29.8276 69.5329 27.0282 69.5329 23.996C69.5329 16.5202 63.4727 10.46 55.9969 10.46C48.5212 10.46 42.4609 16.5202 42.4609 23.996C42.4609 31.4717 48.5212 37.532 55.9969 37.532C58.9975 37.532 61.77 36.5557 64.0141 34.9034L69.0904 39.9796L71.9188 37.1512L66.8517 32.0842ZM63.1568 30.3569C64.6606 28.6654 65.5741 26.4374 65.5741 23.996C65.5741 18.7066 61.2863 14.4188 55.9969 14.4188C50.7076 14.4188 46.4197 18.7066 46.4197 23.996C46.4197 29.2853 50.7076 33.5732 55.9969 33.5732C58.4383 33.5732 60.6664 32.6597 62.3579 31.1558L63.1568 30.3569Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M35.7184 33.6973H10.0254V37.6973H38.0738C37.1617 36.4525 36.3708 35.1133 35.7184 33.6973Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M33.6848 21.998H10.0273V25.998H33.6845C33.6283 25.3394 33.5996 24.673 33.5996 23.9998C33.5996 23.3254 33.6284 22.6578 33.6848 21.998Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M38.0747 10.2998H10.0273V14.2998H35.7186C36.3712 12.8837 37.1624 11.5446 38.0747 10.2998Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
            <h1 className="site-title">Horizon</h1>
            <div className="header-right">
              {user ? (
                <>
                  <span className="welcome-text">Welcome, {user.username}</span>
                  <button className="auth-button sign-out-button" onClick={handleLogout}>Sign Out</button>
                </>
              ) : (
                <>
                  <button className="auth-button register-button" onClick={() => setShowRegister(true)}>Register</button>
                  <button className="auth-button sign-in-button" onClick={() => setShowLogin(true)}>Sign In</button>
                </>
              )}
            </div>
          </div>
        </header>

        <nav className="main-nav">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/news" className="nav-button">News</Link>
          <Link to="/sport" className="nav-button">Sports</Link>
          <Link to="/entertainment" className="nav-button">Entertainment</Link>
          <Link to="/technology" className="nav-button">Technology</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <div className="articles-grid">
                {articles.map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </main>
          } />
          <Route path="/news" element={<div>News Page</div>} />
          <Route path="/sport" element={<div>Sport Page</div>} />
          <Route path="/business" element={<div>Business Page</div>} />
          <Route path="/innovation" element={<div>Innovation Page</div>} />
          <Route path="/culture" element={<div>Culture Page</div>} />
          <Route path="/arts" element={<div>Arts Page</div>} />
          <Route path="/travel" element={<div>Travel Page</div>} />
          <Route path="/earth" element={<div>Earth Page</div>} />
          <Route path="/audio" element={<div>Audio Page</div>} />
          <Route path="/video" element={<div>Video Page</div>} />
          <Route path="/live" element={<div>Live Page</div>} />
          <Route path="/weather" element={<div>Weather Page</div>} />
          <Route path="/terms" element={<div>Terms of Use</div>} />
          <Route path="/about" element={<div>About the BBC</div>} />
          <Route path="/privacy" element={<div>Privacy Policy</div>} />
          <Route path="/cookies" element={<div>Cookies</div>} />
          <Route path="/accessibility" element={<div>Accessibility Help</div>} />
          <Route path="/contact" element={<div>Contact the BBC</div>} />
          <Route path="/advertise" element={<div>Advertise with us</div>} />
          <Route path="/do-not-sell" element={<div>Do not share or sell my info</div>} />
          <Route path="/support" element={<div>Contact technical support</div>} />
          <Route path="/external-linking-policy" element={<div>External Linking Policy</div>} />
        </Routes>

        <Footer />

        {showLogin && (
          <Login
            onClose={() => setShowLogin(false)}
            onSwitchToRegister={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
          />
        )}

        {showRegister && (
          <Register
            onClose={() => setShowRegister(false)}
            onSwitchToLogin={() => {
              setShowRegister(false);
              setShowLogin(true);
            }}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
