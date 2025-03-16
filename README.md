[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Amato1891/angular-quiz-app/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/Amato1891/angular-quiz-app)](https://github.com/Amato1891/angular-quiz-app/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/Amato1891/angular-quiz-app)](https://github.com/Amato1891/angular-quiz-app/commits/main)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fyour-website-url.com)](https://your-website-url.com)
[![Language](https://img.shields.io/github/languages/top/Amato1891/angular-quiz-app)](https://github.com/Amato1891/angular-quiz-app)
[![Build Status](https://img.shields.io/github/workflow/status/Amato1891/angular-quiz-app/CI)](https://github.com/Amato1891/angular-quiz-app/actions)
# Angular Quiz App

## 📑 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Live Website](#-live-website)
- [Setup](#-setup)
- [Deployment](#-deployment)
- [Contact](#-contact)
- [Issues](#-issues)

Welcome to the official repository for the **Angular Quiz App**! This project is an interactive quiz app built using Angular that allows users to take quizzes on various topics, track their scores, and improve their knowledge. 

## 🚀 Features

### 📝 Quiz App
The **Quiz App** feature allows users to participate in dynamic, interactive quizzes built with Angular. Users can answer a variety of questions, view their scores in real-time, and track their progress over time. The system is highly flexible, allowing easy addition of new quizzes, categories, and questions through the app's backend, which is powered by a PostgreSQL database. This makes it scalable and easy to manage large sets of quizzes and questions.

### 🗂️ Task Tracker
The **Task Tracker** feature enables users to efficiently manage their tasks within the app. Users can create, update, delete, and categorize tasks, set deadlines, and mark tasks as completed. It serves as a productivity tool, helping users stay organized and keep track of their personal or project-related tasks. This functionality is seamlessly integrated with the PostgreSQL database hosted on AWS RDS for efficient and reliable task management.

### 🏆 Quiz Leaderboard
The **Quiz Leaderboard** brings a competitive edge to the Quiz App. It displays the highest scores of quiz participants in real-time, enabling users to compare their performance and challenge others. Users can strive to earn the top spot and gain recognition. This feature encourages social interaction and adds a fun, gamified aspect to the quiz-taking experience. The leaderboard data is fetched from the PostgreSQL database, ensuring that scores are updated instantly and accurately.

### 🌐 Cloud Hosting (AWS EC2 & S3)
- **Frontend on AWS S3**: The frontend of the Angular Quiz App is hosted on AWS S3 for fast, secure, and scalable access to users. S3 ensures the app is highly available, and its content is delivered efficiently to users across the globe.
  
- **Backend on AWS EC2 with RDS**: The backend API is deployed on an AWS EC2 instance, while the app's PostgreSQL database is hosted on AWS RDS. This infrastructure provides robust performance, high availability, and automatic backups. EC2 and RDS work together to ensure a seamless experience for users, handling both frontend requests and database interactions effectively.

---

## 📦 Tech Stack
- **Frontend**: 
  - Angular (for building dynamic and responsive user interfaces)
  - HTML, CSS, JavaScript
  - AWS S3 (for frontend hosting)
  
- **Backend**:
  - Node.js with Express.js (handling API requests)
  - PostgreSQL (for database management)
  - AWS EC2 (for backend hosting)
  - AWS RDS (for database hosting)
  
## 🌐 Live Website
You can check out the live version of the website at:  
[Angular Quiz App](http://jims-angular-frontend.s3-website-us-east-1.amazonaws.com/)

## 🛠️ Setup
To run this project locally, follow these steps:

### Clone the repository:

```bash
git clone https://github.com/Amato1891/angular-quiz-app.git
