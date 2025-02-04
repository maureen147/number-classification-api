# Number Classification API

The **Number Classification API** is a **Node.js-based** service that analyzes a given number to determine its mathematical properties and provides an interesting fact about it. The API evaluates whether the number is **prime**, **perfect**, or an **Armstrong number**, identifies its parity (odd or even), calculates the sum of its digits, and fetches a fun fact from an **external** source.

## Features
- **Prime Check**: Determines if a number is a prime number.
- **Perfect Number Check**: Evaluates if a number is a perfect number.
- **Armstrong Number Check**: Checks if a number is an Armstrong number.
- **Parity Identification**: Identifies if a number is odd or even.
- **Digit Sum Calculation**: Computes the sum of the digits of the number.
- **Fun Fact Retrieval**: Fetches an interesting fact about the number from an external API.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Axios**: Promise-based HTTP client for making API requests.
- **dotenv**: Module for loading environment variables.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.

## Project Structure
```
number-classification-api/
├── node_modules/
├── src/
│   ├── routes/
│   │   └── numberRoutes.js
│   ├── utils/
│   │   ├── classifyNumber.js
│   │   └── helper.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```
### File Descriptions
- **src/routes/numberRoutes.js**: Defines the API endpoint and handles incoming requests.
- **src/utils/classifyNumber.js**: Contains the logic for classifying the number and fetching the fun fact.
- **src/utils/helper.js**: Provides helper functions to determine mathematical properties.
- **src/app.js**: Initializes the Express application and sets up middleware.
- **src/server.js**: Starts the server and listens for incoming connections.

## Installation and Setup

### 1. Clone the Repository
```sh
git clone https://github.com/maureen147/number-classification-api.git
cd number-classification-api
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add the following:
```sh
PORT=8000
API_URL=http://numbersapi.com
```

### 4. Start the Server
```sh
npm start
```
The server will run on **http://localhost:8000**.

## API Usage
### Endpoint
```
GET /api/classify-number?number=<number>
```

### Parameters
- `number` (required): The number to be classified.

### Responses
#### 200 OK
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```
#### 400 Bad Request
```json
{
    "number": "alphabet",
    "error": true
}
```

## Error Handling
The API returns appropriate HTTP status codes and error messages for invalid inputs or server errors. Ensure that the `number` parameter is provided and is a valid integer.

## Deployment
To deploy your API, use platforms like:
- [Render](https://render.com/)


