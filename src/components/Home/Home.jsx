// src/Home.jsx
import './Home.css'; // 👈 1. 記得引入 CSS 檔案
import myPhoto from '../../assets/IMG_0055.JPG';
import githublogo from '../../assets/github-logo.png';
import fblogo from '../../assets/facebook.png';
import iglogo from '../../assets/instagram.png';
const Home = () => {
    return (
        <div className="home-wrapper"> 
            
            {/* 個人簡介區 */}
            <div className="profile-section">
                <img 
                    src={myPhoto} 
                    alt="My Avatar" 
                    className="avatar" 
                />
                <h1 className="profile-title">hsuhsin</h1>
                <div className="social-links">
                    <a href="https://github.com/hsuhsin-h" target="_blank" rel="noopener noreferrer">
                        <button className = "connect">
                            <img 
                                src={githublogo} 
                                alt="icon" 
                                className="icon" 
                            />
                        </button>
                    </a>
                    <a href="https://www.facebook.com/xu.shi.xin.67514/" target="_blank" rel="noopener noreferrer">
                        <button className = "connect">
                            <img 
                                src={fblogo} 
                                alt="fbicon" 
                                className="metaicon" 
                            />
                        </button>
                    </a>
                    <a href="https://www.instagram.com/hsuhsin_h/" target="_blank" rel="noopener noreferrer">
                        <button className = "connect">
                            <img 
                                src={iglogo} 
                                alt="fbicon" 
                                className="metaicon" 
                            />
                        </button>
                    </a>
                </div>
            </div>

            
            
            {/* 工作經歷區 */}
            <div className="content-section">
                <h1>工作經歷</h1>
                <p>這裡放其他的內容...</p>
            </div>
            
        </div>
    );
};

export default Home;