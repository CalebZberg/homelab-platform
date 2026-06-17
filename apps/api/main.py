from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://192.168.1.100:5173",
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}


services_data = [
    {"name": "Minecraft Server", "status": "online"},
    {"name": "Dashboard", "status": "in_progress"},
    {"name": "NAS", "status": "planned"}
]


@app.get("/services")
def get_services():
    return services_data







