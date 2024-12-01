# Library Management System

This project is a Library Management System built with Node.js and PostgreSQL. It allows for managing books, users, and the borrowing and returning of books. The application is containerized using Docker, making it easy to set up and run with minimal configuration.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Directory Structure](#directory-structure)
- [Database Setup](#database-setup)
- [Run Project](#run-project)
- [License](#license)

## Features

The library management system is designed to run the following features given in the document in accordance with the formats specified in the postman collection.

- **User Management**
- **Book Management**
- **Borrowing and Returning Books**
- **Rating Books**

## Technology Stack

- **Backend Framework**: Node.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Containerization**: Docker and Docker Compose
- **Validation**: Joi

## Directory Structure

The project structure is organized as follows:

```
library-management
├── Controllers
│   ├── Books.js
│   └── Users.js
├── DBScripts
│   ├── ddl.sql
│   └── library.sql
├── Dockerfile
├── LICENSE
├── Languages
│   ├── english.js
│   └── turkish.js
├── Middleware
│   └── LanguageHelper.js
├── README.md
├── Routes
│   ├── Books.js
│   ├── Users.js
│   └── index.js
├── Services
│   ├── Books.js
│   └── Users.js
├── Validations
│   ├── Books.js
│   └── Users.js
├── docker-compose.yml
├── docker-entrypoint.sh
├── index.js
├── package-lock.json
├── package.json
└── src
    ├── config
    │   └── config.js
    ├── migrations
    │   ├── 20240408132513-create-users.js
    │   ├── 20240408133147-create-books.js
    │   ├── 20240408133259-create-borrows.js
    │   └── 20240408133331-create-ratings.js
    ├── models
    │   ├── books.js
    │   ├── borrows.js
    │   ├── index.js
    │   ├── ratings.js
    │   └── users.js
    └── seeders
        ├── 20240409100917-users.js
        ├── 20240409100922-books.js
        ├── 20240409100927-ratings.js
        └── 20241130140432-borrows.js
```

### **Explanation of Main Directories:**

- **Controllers**: Handles incoming HTTP requests and sends responses.
- **DBScripts**: Contains SQL scripts for manual database setup if needed.
- **Languages**: Holds localization files for multiple languages.
- **Middleware**: Contains custom middleware functions.
- **Routes**: Defines the endpoints for the application.
- **Services**: Implements the business logic and interacts with the models.
- **Validations**: Contains Joi schemas for request data validation.
- **src**: Holds the Sequelize configuration, models, migrations, and seeders.
- **Dockerfile**: Defines the Docker image for the application.
- **docker-compose.yml**: Configures the Docker services for the application and database.
- **docker-entrypoint.sh**: Script to initialize the database and start the application within the Docker container.

## Database Setup

### **Automated Setup with Docker Compose**

The easiest way to set up the database is by using Docker Compose. The `docker-compose.yml` file is configured to automatically handle database operations, including running migrations and seeders.

When you run the application using Docker Compose (as described in the [Run Project](#run-project) section), the following database setup steps are automated:

- **Database Initialization**: A PostgreSQL container is started with the specified user, password, and database name.
- **Migrations**: Sequelize migrations are automatically executed to create the database schema.
- **Seeders**: Initial data is populated into the database using Sequelize seeders.

### **Manual Setup (Optional)**

If you prefer to set up the database manually without Docker, you can use one of the following methods.

#### **Method 1: Using Sequelize Migrations and Seeders**

1. **Install Dependencies** (if not already done):

   ```bash
   npm install
   ```

2. **Configure Database Connection**:

   Update the `src/config/config.js` file with your database credentials.

3. **Run Migrations**:

   Navigate to the `src` directory and run the migrations to create the database schema:

   ```bash
   cd src
   npx sequelize-cli db:migrate
   ```

4. **Run Seeders**:

   Run the seeders to populate the database with initial data:

   ```bash
   npx sequelize-cli db:seed:all
   ```

#### **Method 2: Restoring Database Backup**

1. **Create the Database**:

   ```bash
   createdb -U your_username library
   ```

2. **Restore from Backup**:

   Restore the database backup from the `DBScripts/library.sql` file:

   ```bash
   psql -U your_username -d library -f DBScripts/library.sql
   ```

#### **Method 3: Using DDL Script**

1. **Create the Database**:

   Create the database and tables using the DDL script in `DBScripts/ddl.sql`. First create database with specified script then connect to the newly created `library` database and run the remaining script to create tables

## Run Project

### **Using Docker Compose (Recommended)**

The project is containerized using Docker, simplifying the setup process.

1. **Install Docker and Docker Compose**:

   Ensure you have Docker and Docker Compose installed on your machine.

2. **Clone the Repository**:

   ```bash
   git clone https://github.com/kerem-ozt/library-management-api
   ```

3. **Navigate to the Project Directory**:

   ```bash
   cd library-management-system
   ```

4. **Build and Run the Containers**:

   ```bash
   docker-compose up --build
   ```

   This command will:

   - Build the Docker images for the application and PostgreSQL.
   - Start the containers.
   - Run database migrations and seeders automatically.

5. **Access the Application**:

   The application will be accessible at `http://localhost:3000`.

6. **Stop the Containers**:

   To stop the application, press `Ctrl+C` or run:

   ```bash
   docker-compose down
   ```

### **Running Locally without Docker**

If you prefer to run the application without Docker:

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Configure Database Connection**:

   Update the `src/config/config.js` file with your database credentials.

3. **Set Up the Database**:

   Follow the steps in [Database Setup](#database-setup) to initialize the database.

4. **Start the Application**:

   ```bash
   npm start
   ```

   The application will start on `http://localhost:3000`.

## License

This project is licensed under the [MIT License](LICENSE).

---