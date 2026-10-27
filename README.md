# Nexora Commerce Engine 🛒

A full-stack, decouple-architected inventory and catalog management engine powered by a high-performance Java Spring Boot backend and dynamic client interface.

---

## ⚡ Architecture Overview
- **Client Tier:** HTML5, CSS3, ES6 JavaScript (Fetch API, dynamic DOM injection)
- **Service Tier:** Java Spring Boot, Spring MVC REST Controllers
- **Persistence Tier:** Spring Data JPA, Hibernate ORM, MySQL Database
- **Build Tool:** Maven (Wrapper included)

---

## 🛠️ REST API Endpoints

| Method | Endpoint | Description | Payload / Response |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/products` | Fetches all available inventory items | JSON Array of Product Objects |
| `POST` | `/api/products` | Adds a new product to inventory | JSON Product Request Body |

---

## 🚀 Local Setup & Installation

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/dinesh-22-kumar/Nexora-Commerce-Engine.git
cd Nexora-Commerce-Engine
\`\`\`

### 2. Database Configuration
Ensure MySQL service is running locally on port `3306`. Update `nexora-store/src/main/resources/application.properties` with your database credentials if required:
\`\`\`properties
spring.datasource.url=jdbc:mysql://localhost:3306/nexora_db?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
\`\`\`

### 3. Run Backend Server
\`\`\`bash
cd nexora-store
.\mvnw.cmd spring-boot:run
\`\`\`
The backend starts on `http://localhost:8080`.

### 4. Launch Frontend
Open `index.html` via Live Server or directly in any modern browser.
