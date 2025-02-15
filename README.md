# Product API

This project is a simple RESTful API built with Node.js, Express, and MongoDB. It allows you to create, read, update, and delete products. The application connects to a remote MongoDB database hosted on Railway and is deployed on Render.

## Features

- **Create Product:** Add a new product using a POST request.
- **Read Products:** Retrieve a list of all products using a GET request.
- **Update Product:** Modify an existing product using a PUT request.
- **Delete Product:** Remove a product using a DELETE request.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Railway](https://railway.app/) (for MongoDB hosting)
- [Render](https://render.com/) (for deployment)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
Install dependencies:

2. **Install dependencies:**
npm install

3. **Set up environment variables:**
Create a .env file in the root directory and add the following variables:
MONGO_URI=mongodb://mongo:mtyzZCOAICKpWoHNoushkpjqCFXNyrRN@yamabiko.proxy.rlwy.net:14154
PORT=8000

4. **Run the application:**
npm start
The server will start on http://localhost:8000/api/products
(The URL http://localhost:8000/api/products will only work if you are running the server on your local machine.)

## API Endpoints
~ GET /api/products
Description: Retrieve a list of all products.
Example:
curl http://localhost:8000/api/products

## POST /api/products
~ Description: Add a new product.

~ Request Body Example:
{
  "name": "Laptop",
  "price": 1200,
  "description": "Gaming laptop",
  "category": "Electronics",
  "stock": 5
}
~ Example using cURL:
curl -X POST http://localhost:8000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "price": 1200,
    "description": "Gaming laptop",
    "category": "Electronics",
    "stock": 5
  }'
## PUT /api/products/:id
~ Description: Update an existing product by its ID.
~ Request Body: JSON with updated fields.
## DELETE /api/products/:id
~ Description: Delete a product by its ID.
## Deployment
~ The application is deployed on Render. The public URL for the API is:

https://market-1-l7xa.onrender.com/api/products
## Database
This application connects to a MongoDB database hosted on Railway using Public Networking. The connection string is stored in the MONGO_URI environment variable.

