import React from 'react';

const K8s = () => {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>Kubernetes 實作</h1>
      <p>這裡是我記錄 K8s 架構、Dashboard 配置與容器管理的地方。</p>
      <ul>
        <li>幫助實驗室部署k8s，包含.156伺服器的訓練模型部署、.159伺服器的實驗室網站後端部署(eztalk)</li>
        <li>控制機和工作機架設，cilium網路通訊架設</li>
        <li>Pod 與 Deployment 實作</li>
        <li>從docker hub抓取映像檔</li>
        <li>架設github的workflow，啟用CI/CD</li>
        <li>熟悉kubectl</li>
      </ul>
    </div>
  );
};

export default K8s; // 👈 這行最重要，沒寫它 App.jsx 就讀不到！