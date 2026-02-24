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
                
                <p>目標正在往雲端工程師邁進...</p>
                <p>我的七龍珠</p>
                <p>1.學歷：臺北大學碩士畢業</p>
                <p>2.證照：AWS Certified Cloud Practitioner (CLF)</p>
                <p>3.證照：AWS Certified Solutions Architect – Associate (SAA)</p>
                <p>4.容器化：Docker熟練</p>
                <p>5.編排：Kubernetes (K8s) 叢集部署與管理</p>
                <p>6.網路：深入理解 TCP/IP、VPC 子網劃分與路徑解析</p>
                <p>自動化：Terraform 基礎設施即代碼 (IaC) 或 Python 自動化腳本開發</p>

            </div>
            
        </div>
    );
};

export default Home;