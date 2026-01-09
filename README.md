# 🚀 Job Affiliate System (v1)

JobDhundo is a full-stack job affiliate web application built using Spring Boot and React.js.
The project simulates a real-world job listing platform with a clean architecture, RESTful APIs, and a responsive user interface.

This application was developed from scratch to gain hands-on experience in full stack development, API integration, and database management.

---

## 🧩 Features

- Job listing management (CRUD operations)
- RESTful API-based backend
- Dynamic routing in React
- Responsive UI using custom CSS & media queries
- End-to-end integration between frontend and backend

---

## 🛠 Tech Stack

### Backend
- Java
- Spring Boot
- Spring Data JPA
- RESTful APIs

### Frontend
- React.js
- JavaScript
- HTML
- CSS (Custom media queries)

### Database
- MySQL

### Build Tools
- Maven
- npm

---

### Backend Setup (Spring Boot)

1. Clone the repository
   git clone https://github.com/your-username/jobdhundo.git

2. Navigate to backend directory
   cd backend

3. Configure database in application.properties

   spring.datasource.url=jdbc:mysql://localhost:3306/jobsdb
   
   spring.datasource.username=root
   
   spring.datasource.password=your_password
   
   spring.jpa.hibernate.ddl-auto=update

5. Run the application
   mvn spring-boot:run

Backend runs on:
http://localhost:8080

---

### Frontend Setup (React)

1. Navigate to frontend directory
   cd frontend

2. Install dependencies
   npm install

3. Start the development server
   npm run dev

Frontend runs on:
http://localhost:5173

---

## 🔐 API Integration

- REST APIs built using Spring Boot
- Frontend communicates with backend using HTTP requests
- CORS configured for frontend-backend communication

---

## 🔜 Future Enhancements (v2)

- Search functionality
- Filters:
  - Category
  - Experience
  - Company
  - Job Type
- Pagination for large datasets

---

## 📌 Learning Outcomes

- Practical understanding of full stack application flow
- REST API design and integration
- React dynamic routing and component-based UI
- Database integration using JPA
- Writing responsive UI without UI frameworks

---

## 👤 Author

Nishant Vats  

GitHub: https://github.com/nv2930


LinkedIn: https://www.linkedin.com/in/nishantvats30/

---

## 📄 License

This project is for learning and educational purposes.
