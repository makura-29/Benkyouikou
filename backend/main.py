from fastapi import FastAPI

app = FastAPI(title="Benkyouikou API")


@app.get("/api/v1/health")
def health_check():
    return {"status": "ok", "app": "Benkyouikou"}