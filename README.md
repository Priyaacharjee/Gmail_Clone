# 📧 Gmail Clone

A modern, responsive Gmail clone built using **React**, **Redux**, and **Firebase**. This project replicates the core functionality and UI of Gmail including Google Sign-In, Compose Mail, Real-time Mail Updates, Search Functionality, and a Responsive Sidebar.

🚀 **Live Demo:** [https://clone-4fdad.web.app/](https://clone-4fdad.web.app/)


## 🛠️ Features

- 🔐 Google Authentication via Firebase
- 📨 Compose and Send Emails
- 📂 Inbox, Starred, Drafts, Sent, Snoozed Sections
- 🔎 Real-time Search (by subject, recipient, or message)
- 📡 Real-time Sync with Firestore Database
- 🌓 Responsive and Clean UI using TailwindCSS
- 🔄 Redux Toolkit for global state management

---

## 🧰 Tech Stack

| Technology | Description                       |
|------------|-----------------------------------|
| React      | UI Library                        |
| Redux Toolkit | State Management              |
| Firebase   | Backend, Auth, Firestore          |
| TailwindCSS| Styling Framework                 |
| React Icons| UI Icons                          |

---

## 🔐 Firebase Configuration

Make sure to add your own Firebase config in `firebase.js`:

```js
const firebaseConfig = {
  apiKey: "AIzaSyAvIGOFUuqnd06hoj4e668uYS0j9y3jIYw",
  authDomain: "clone-4fdad.firebaseapp.com",
  projectId: "clone-4fdad",
  storageBucket: "clone-4fdad.firebasestorage.app",
  messagingSenderId: "623619822839",
  appId: "1:623619822839:web:5a8c5bc942400e538e6ff2",
  measurementId: "G-8VKK5EGPPV"
};

🧠 Learnings
Through this project, I improved my skills in:

Firebase Authentication and Firestore usage

Redux Toolkit for efficient state handling

Tailwind CSS utility-first styling

Real-time UI updates via Firestore's onSnapshot

Error handling and cleaner component structures in React

📁 src
 ┣ 📁 components
 ┃ ┣ 📄 Navbar.jsx
 ┃ ┣ 📄 Sidebar.jsx
 ┃ ┣ 📄 Messages.jsx
 ┃ ┗ 📄 Message.jsx
 ┣ 📁 redux
 ┃ ┗ 📄 appSlice.js
 ┣ 📄 firebase.js
 ┣ 📄 App.jsx
 ┗ 📄 main.jsx

📬 Contact
Created with ❤️ by Priya Acharjee

📧 Email: priyaacharjee2001@gmail.com
🌐 Portfolio: https://priyaacharjee19.vercel.app/
