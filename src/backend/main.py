from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient

app = FastAPI()

# Add CORS middleware to allow requests from all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow requests from any origin
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Initialize MongoDB client
client = MongoClient("mongodb://localhost:27017/")  # Assuming MongoDB is running locally on default port
db = client["firstdb"]  # Connect to the "firstdb" database
collection = db["users"]  # Use the "users" collection

# Define the User data model
class User(BaseModel):
    username: str
    password: str
    email: str
    phone_number: str
    confirm_password: str

# Function to save a user to the MongoDB collection
def save_user(user: User):
    collection.insert_one(user.dict())

# Function to check if a username is unique
def is_username_unique(username: str):
    return collection.find_one({"username": username}) is None

# Function to check if an email is unique
def is_email_unique(email: str):
    return collection.find_one({"email": email}) is None

# Function to check if a phone number is unique
def is_phone_number_unique(phone_number: str):
    return collection.find_one({"phone_number": phone_number}) is None

# POST endpoint to register a new user
@app.post("/register/")
async def register_user(user: User):
    # Perform validation checks
    if len(user.username) <= 5:
        raise HTTPException(status_code=400, detail="Username must have more than five characters")
    if len(user.password) <= 6:
        raise HTTPException(status_code=400, detail="Password must have more than six characters")
    if user.password != user.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    if not is_username_unique(user.username):
        raise HTTPException(status_code=400, detail="Username already exists")
    if not is_email_unique(user.email):
        raise HTTPException(status_code=400, detail="Email already exists")
    if not is_phone_number_unique(user.phone_number):
        raise HTTPException(status_code=400, detail="Phone number already exists")

    # Save the user if all checks pass
    save_user(user)
    return {"message": "User registered successfully"}
