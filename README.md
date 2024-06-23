# Dominos Clone

## Overview

This project is a Domino's Pizza ordering website built with ASP.NET Core for the backend and Angular with Bootstrap for the frontend. It utilizes Entity Framework for data management and MySQL as the database system. This README provides an overview of the project structure, key features, setup instructions, and other relevant details.

## Project Structure

### Backend (ASP.NET Core)

- **Controllers**: Contains API controllers for handling pizza orders, user management, and other functionalities.
  - Example: `OrdersController.cs`, `UsersController.cs`
  
- **Models**: Defines data models used throughout the application.
  - Example: `Order.cs`, `User.cs`
  
- **Data**: Contains database context and migrations for Entity Framework.
  - Example: `ApplicationDbContext.cs`, `Migrations/`
  
- **Services**: Provides business logic and services used by the controllers.
  - Example: `OrderService.cs`, `UserService.cs`
  
- **Startup.cs**: Configures services and middleware for the ASP.NET Core application.
  
### Frontend (Angular)

- **src/app/components**: Angular components for different parts of the application.
  - Example: `pizza-list.component.ts`, `order-summary.component.html`
  
- **src/app/services**: Angular services for interacting with backend APIs.
  - Example: `order.service.ts`, `user.service.ts`
  
- **src/assets**: Contains static assets like images, CSS files, and fonts.
  
- **angular.json**: Configuration file for Angular CLI build and development settings.

## Features

- **Pizza Ordering**: Allows users to browse pizzas, customize orders, and place them.
- **User Management**: Registration, login, and profile management functionalities.
- **Admin Dashboard**: Backend interface for managing pizzas, orders, and users.
- **Responsive Design**: Utilizes Bootstrap and custom CSS for a mobile-friendly user interface.
- **Database Management**: MySQL database integration for efficient data storage and retrieval.

## Setup Instructions

1. **Clone the Repository**: `git clone https://github.com/your-repo-url.git`
2. **Backend Setup**:
   - Open the backend project in Visual Studio or preferred IDE.
   - Update connection strings in `appsettings.json` for MySQL database.
   - Run Entity Framework migrations to create database schema: `dotnet ef database update`.
   - Build and run the backend application.
   
3. **Frontend Setup**:
   - Navigate to the `src` folder of the Angular project.
   - Install dependencies: `npm install`.
   - Update API base URL if necessary in environment files (`environment.ts`, `environment.prod.ts`).
   - Build the Angular project: `ng build`.
   - Run the Angular development server: `ng serve`.

4. **Access the Application**:
   - Navigate to `http://localhost:4200` in your web browser to access the frontend.
   - Backend APIs will be accessible based on the configured base URL.

## Notes

- Ensure all required packages and dependencies are installed and configured correctly.
- Customize the application further based on specific business requirements and design preferences.
- Perform thorough testing before deploying the application to production to ensure functionality and performance.

# Angular CLI Project Demo

This project was generated with Angular CLI version 13.1.3.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `ng test` to execute the unit tests via Karma.

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference page](https://angular.io/cli).

