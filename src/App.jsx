import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AWS from './components/AWS/AWS';
import Skill from './components/Skill/Skill';
import K8s from './components/K8s/K8s';
import Beyblade from './components/Beyblade/Beyblade';


const App = () => {
  
  const [isOpen, setIsOpen] = useState(false); // 👈 控制選單開關的大腦
  const [goals, setGoals] = useState([]);
  const navigate = useNavigate();
  // 切換選單的動作

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/goals');
        const data = await response.json();
        setGoals(data); // 3. 把抓到的資料存起來
      } catch (error) {
        console.error("無法連線至後端 API:", error);
      }
    };
    fetchGoals();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // 點擊選項後自動關閉選單並換頁
  const changePage = (path) => {
    navigate(path);
    //setCurrentPage(page);
    setIsOpen(false); 
  };

  return (
    <div className="app-container">
      {/* --- 三條槓按鈕 --- */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      {/* --- 側邊拉出選單 --- */}
      <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="logo">要練才會強</div>
        <ul className="nav-links">
          <li onClick={() => changePage('Home')}>首頁</li>
          <li onClick={() => changePage('AWS')}>AWS</li>
          <li onClick={() => changePage('k8s')}>k8s</li>
          <li onClick={() => changePage('Beyblade')}>Beyblade</li>
          <li onClick={() => changePage('Skill')}>技能樹</li>
          <li onClick={() => changePage('about')}>關於我</li>
        </ul>
      </aside>

      {/* --- 遮罩層 (選單打開時，點擊空白處可關閉) --- */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {/* --- 主內容區 --- */}
      <main className="content">
        {/* 4. 把原本的 {currentPage === ...} 全部換成 Routes */}
        <Routes>
          {/* 👈 關鍵：把 goals 變數當作 props 傳進去 */}
          <Route path="/Home" element={<Home goals={goals} />} /> 
          <Route path="/k8s" element={<K8s />} />
          <Route path="/AWS" element={<AWS />} />
          <Route path="/beyblade" element={<Beyblade />} />
          <Route path="/Skill" element={<Skill />} />
          <Route path="/about" element={<div>關於我（開發中...）</div>} />
          {/* 同樣這裡也要傳，確保預設路徑也能看到資料 */}
          <Route path="*" element={<Home goals={goals} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;