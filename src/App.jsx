import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import K8s from './components/K8s/K8s';


const App = () => {
  
  const [isOpen, setIsOpen] = useState(false); // 👈 控制選單開關的大腦
  const navigate = useNavigate();
  // 切換選單的動作
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
        <div className="logo">Hsuhsin Lab</div>
        <ul className="nav-links">
          <li onClick={() => changePage('home')}>首頁</li>
          <li onClick={() => changePage('projects')}>技術專案</li>
          <li onClick={() => changePage('k8s')}>k8s</li>
          <li onClick={() => changePage('Beyblade')}>Beyblade</li>
          <li onClick={() => changePage('about')}>關於我</li>
        </ul>
      </aside>

      {/* --- 遮罩層 (選單打開時，點擊空白處可關閉) --- */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {/* --- 主內容區 --- */}
      <main className="content">
        {/* 4. 把原本的 {currentPage === ...} 全部換成 Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/k8s" element={<K8s />} />
          <Route path="/projects" element={<div>專案頁（開發中...）</div>} />
          <Route path="/beyblade" element={<div>Beyblade（開發中...）</div>} />
          <Route path="/about" element={<div>關於我（開發中...）</div>} />
          {/* 萬一網址亂打，自動導向首頁 */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;