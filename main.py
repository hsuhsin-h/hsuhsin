from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from typing import List
from contextlib import asynccontextmanager # 1. 引入這個工具
from fastapi.middleware.cors import CORSMiddleware



# 2. 定義生命週期管理員 (Lifespan)
@asynccontextmanager
async def lifespan(app: FastAPI):
    # --- [啟動時執行 (原本的 startup 內容)] ---
    initial_goals = [
        {"id": 1, "text": "學歷：臺北大學碩士畢業", "category": "education"},
        {"id": 2, "text": "證照：AWS Certified Cloud Practitioner (CLF)", "category": "cloud", "completed":True},
        {"id": 3, "text": "證照：AWS Certified Solutions Architect – Associate (SAA)", "category": "cloud"},
        {"id": 4, "text": "容器化：Docker熟練", "category": "container"},
        {"id": 5, "text": "編排：Kubernetes (K8s) 叢集部署與管理", "category": "container"},
        {"id": 6, "text": "網路：深入理解 TCP/IP、VPC 子網劃分", "category": "network"},
        {"id": 7, "text": "自動化：Terraform 基礎設施即代碼", "category": "automation"},
        
        
        
      
    ]
    
    # 自動更新邏輯
    await collection.delete_many({})
    await collection.insert_many(initial_goals)
    print("⚡️ [Lifespan] PM2 已重新啟動，資料庫內容已自動同步！")
    
    yield # --- 服務正式運行的地方 ---
    
    # --- [關閉時執行 (原本的 shutdown 內容)] ---
    # 如果有需要關閉資料庫連線，可以寫在這裡
    print("👋 服務正在關閉...")

# 3. 在初始化 app 時，將 lifespan 傳進去
app = FastAPI(lifespan=lifespan)

# 允許跨域請求的來源清單
origins = [
    "http://localhost:5173",    # React 開發環境
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # 允許這些來源
    allow_credentials=True,
    allow_methods=["*"],        # 允許所有方法 (GET, POST 等)
    allow_headers=["*"],        # 允許所有標頭
)

# 資料庫連線維持不變
client = AsyncIOMotorClient("mongodb://localhost:27017")
db = client.hsuhsin_lab
collection = db.goals

class Goal(BaseModel):
    id: int
    text: str
    category: str
    completed: bool = False

@app.get("/api/goals", response_model=List[Goal])
async def get_goals():
    goals = []
    cursor = collection.find({}, {"_id": 0}) 
    async for document in cursor:
        goals.append(document)
    return goals