import React from 'react';

const K8s = () => {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>Kubernetes 學習實驗室</h1>
      <p>這裡是我記錄 K8s 架構、Dashboard 配置與容器管理的地方。</p>
      <ul>
        <li>Control Plane 組件分析</li>
        <li>Worker Node 運作機制</li>
        <li>Pod 與 Deployment 實作</li>
      </ul>
    </div>
  );
};

export default K8s; // 👈 這行最重要，沒寫它 App.jsx 就讀不到！