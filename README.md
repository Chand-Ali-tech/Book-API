# Book API

A powerful and efficient Book API built with Node.js, Express, and MongoDB. This API provides full CRUD (Create, Read, Update, Delete) operations on books and includes authentication and authorization features using JWT.

---

## Features

- **User Authentication & Authorization**  
  - Signup and login functionality using JWT (JSON Web Token)
  - Protected routes with authentication middleware
- **Book Management (CRUD Operations)**  
  - Add new books
  - View all books
  - Update book details
  - Delete books
- **Technology Stack**  
  - Node.js with Express framework
  - MongoDB with Mongoose ODM
  - JWT for secure authentication
  - Nodemon for development workflow

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Chand-Ali-tech/Book-API.git
   cd Book-API
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=8080
   URL=mongodb://127.0.0.1:27017
   JWT_SECRET_KEY=YourSecretKey
   JWT_Expires_In=1d
   JWT_COOKIE_EXPIRES_In=12
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

   The server will run at `http://localhost:8080`

---

## API Endpoints

### **Authentication**

| Method | Endpoint    | Description          |
|--------|------------|----------------------|
| POST   | /auth/signup | Register a new user  |
| POST   | /auth/login  | Login user and get JWT|
| GET    | /auth/logout | Logout user and clear JWT cookie |

### **Book Operations**

| Method | Endpoint   | Description                   |
|--------|------------|-------------------------------|
| POST   | /book       | Add a new book                |
| GET    | /book       | Get all books                 |
| GET    | /book/:id   | Get a single book by ID        |
| PATCH  | /book/:id   | Update a book by ID            |
| DELETE | /book/:id   | Delete a book by ID            |

---

## Project Structure

```
Book-API/
│-- controllers/
│   ├── authController.js
│   ├── bookController.js
│-- models/
│   ├── bookModel.js
│   ├── userModel.js
│-- routes/
│   ├── bookRouter.js
│   ├── userRouter.js
│-- utils/
│   ├── AppError.js
│   ├── catchAsync.js
│-- app.js
│-- server.js
│-- .env
│-- package.json
│-- README.md
```

---

## Security & Best Practices

- Always keep your `JWT_SECRET_KEY` private and never commit it to source control.
- Use environment variables for sensitive information.
- Implement input validation and sanitization to prevent security vulnerabilities.

---

## License

This project is licensed under the MIT License.

---

## Contact

For any inquiries or suggestions, please reach out to:

- **GitHub:** [Chand-Ali-tech](https://github.com/Chand-Ali-tech)
- **Email:** chachand450@gmail.com

---

Enjoy using the Book API! 🚀

