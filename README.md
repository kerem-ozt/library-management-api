# Library Management System

This project is a Library Management System built with Node.js and PostgreSQL. It allows for managing books, users, and the borrowing and returning of books.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Directory Structure](#directory-structure)
- [Database Setup](#database-setup)
- [Run Project](#run-project)
- [License](#license)

## Features

The library management system is designed to run the following features given in the document in accordance with the formats specified in the postman collection.

- User management
- Book management
- Borrowing and returning books
- Rating books

## Technology Stack

- **Backend Framework**: Node.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Validation**: Joi

## Directory Structure

The file tree of the main branch of the application is shown below. And explained main directories.

- `Controllers`: Contains controller files for handling requests.
- `DBScripts`: Contains SQL scripts for setting up the database.
- `Languages`: Contains files for language translations.
- `Middleware`: Contains middleware files.
- `Routes`: Contains route definitions.
- `Services`: Contains service files for business logic.
- `src`: Contains Sequelize configurations, migrations, models, and seeders.
- `Validations`: Contains validation files for request data.

```
library-management
├── Controllers
│   ├── Books.js
│   └── Users.js
├── DBScripts
│   ├── ddl.sql
│   └── library.sql
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
├── index.js
├── package-lock.json
├── package.json
└── src
    ├── config
    │   └── config.json
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
        └── 20240409100927-ratings.js
```

## Database Setup

- **Method 1: Using Sequelize Migrations and Seeds**
  - Go to the /src directory. Run the migrations to create the database schema:
    ```
    npx sequelize-cli db:migrate
    ```
  - Run the seeders to populate the database with initial data:
    ```
    npx sequelize-cli db:seed:all
    ```

- **Method 2: Restoring Database Backup**
  - Restore the database backup from the `DBScripts/library.sql` file:
    ```
    psql -U username -d library -f DBScripts/library.sql
    ```

- **Method 3: Using DDL Script**
  - Create the database and tables using the DDL script in `DBScripts/ddl.sql`. First create database with specified script then connect to the newly created `library` database and run the remaining script to create tables

## Run Project

To set up and run this project, follow these steps:

1. Clone the repository:
```
git clone https://github.com/yourusername/library-management-system.git
```
2. Navigate to the project directory:
```
cd library-management-system
```
3. Install dependencies:
```
npm install
```
4. Configure database config file `src/config/config.json`.
5. Start the application:
```
npm start
```

## License

This project is licensed under the [MIT License](LICENSE).