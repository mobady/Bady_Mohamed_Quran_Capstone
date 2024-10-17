# Bady_Mohamed_Quran_Capstone
# Bady_Mohamed_Quran_Capstone
# Bady_Mohamed_Quran_Capstone

# Quran Application

## Project Overview

This project is a **Quran Application** developed using **React** for the frontend and **Express.js** for the backend. It offers an interactive platform for users to explore the Quran. The main aim is to make learning and understanding the Quran easier by providing users with a structured way to browse Surahs, Ayahs, and engage with quizzes that reinforce their knowledge.

## Features

### 1. Surah and Ayah Display
- Users can browse through all **114 Surahs** of the Quran and explore each Surah in detail.
- Detailed **Ayah view** including attributes like **Ayah number**, **text**, **Juz**, **Ruku**, and **HizbQuarter**.
- Dynamic fetching of Ayah and Surah content from **MongoDB** ensures consistent and up-to-date information.

### 2. User Authentication
- **User Authentication** is powered by **Firebase**, allowing users to **sign up** and **log in** securely.
- Firebase is used to authenticate users with email and password, ensuring secure access to user-specific content.

### 3. Interactive Quiz Module
- Includes a **quiz module** for users to test their knowledge of the Quran.
- Quizzes are generated dynamically and track user scores.
- Score tracking is done via **MongoDB** and enables users to monitor their progress over time.

### 4. User Profiles and Leaderboard
- Registered users have profiles containing information such as **username**, **email**, and **quiz scores**.
- The **leaderboard** displays the top users based on quiz performance, fostering engagement through friendly competition.

### 5. Responsive User Interface
- The UI is designed with a **goldenrod and black color scheme** for an elegant appearance.
- The application uses **modular CSS** files to maintain consistency across components.
- Fully **mobile-responsive** design to ensure compatibility across all devices.

### 6. Backend and Database
- **Express.js** is used to create a RESTful API for managing user data, Surahs, and Ayahs.
- The database is powered by **MongoDB** and includes models for **Surah**, **Ayah**, **User**, and **Quran** metadata.
- The backend handles tasks like **user registration**, **login**, **score management**, and **Surah/Ayah retrieval**.

### 7. Firebase Integration
- **Firebase** handles both **authentication** and **analytics** to track user interaction.
- Firebase configuration includes credentials for proper initialization of services when the app starts.

### 8. Tools and Technologies Used
- **Technical Skills**: The project leverages a wide range of technical skills, including **HTML**, **CSS**, **JavaScript**, **React**, **Firebase**, **MongoDB**, **Express.js**, **REST API development**, and **version control** using **Git**.
- **React**: For building a dynamic and responsive frontend.
- **React Router**: For seamless navigation between pages.
- **Express.js**: For developing a REST API that communicates with the frontend.
- **Firebase**: Used for authentication and analytics.
- **MongoDB**: A NoSQL database to store Surahs, Ayahs, and user data.


### 9. Planned Features
- **Ayah Audio Playback**: To allow users to listen to each Ayah directly from the app.
- **Bookmarking and Favorites**: Users will be able to **bookmark** their favorite Ayahs or Surahs.
- **Dark and Light Mode**: Currently, the application uses a dark theme. A **light mode** is being considered to enhance accessibility.


