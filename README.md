# 🌟 Intern Data Management System (IDMS)

A modern, responsive, and fully integrated application built to streamline the management of Interns and Training Batches. IDMS features a beautiful dark-mode aesthetic with a dynamic set of frontend components backed by a robust REST API.

## 🚀 Tech Stack

- **Frontend:** Angular 17+ (TypeScript) with modern standalone components and Vanilla CSS.
- **Backend:** Spring Boot (Java), Spring Data JPA, Hibernate.
- **Database:** MySQL.
- **Build Tools:** Maven (Backend) / npm (Frontend).

## ✨ Key Features

- **Dashboard & Batch Overview:** View and manage ongoing training batches.
- **Intern Directory:** Extensive list filtering and management of all active/enrolled interns.
- **Dynamic Enrollment:** Smart forms to register a new intern and assign them dynamically to available batches.
- **Smooth Animations & Dark Mode UI:** Premium look and feel designed from scratch with deep color tokens.

## 🛠️ Getting Started

### 1. Database Setup
Make sure you have MySQL installed. The backend requires a database instance.
By default, the backend will attempt to connect to:
- **Database Name:** `idms_db`
- **Port:** `3306`

*(Check your `application.properties` in `backend/idms-backend/src/main/resources/` to configure Username/Password).*

### 2. Running the Backend (Spring Boot)
1. Navigate to the backend directory:
   ```bash
   cd backend/idms-backend
   ```
2. Start the application using Maven Wrapper:
   ```bash
   ./mvnw spring-boot:run
   ```
   *The backend will automatically start on `http://localhost:8081`.*

### 3. Running the Frontend (Angular)
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend/idms-frontend
   ```
2. Install all required dependencies:
   ```bash
   npm install
   ```
3. Start the Angular Development Server:
   ```bash
   npm start
   ```
   *The frontend UI will be accessible at `http://localhost:4200`.*

---
Created by [Shruti Narkhede](https://github.com/shrutinarkhede2003).
