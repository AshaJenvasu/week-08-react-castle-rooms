# 📜 Nanatsu no Taizai: Rescue Elizabeth Project Summary

## 🏰 Project Overview
A React-based interactive storytelling application inspired by the anime *The Seven Deadly Sins*.  
The project demonstrates advanced React concepts by simulating a mission where Meliodas navigates through a multi-layered castle to rescue Princess Elizabeth.

---

## 🛠️ Technical Stack
- **Frontend Library:** React.js  
- **Styling:** Tailwind CSS (layout and animations)  
- **State Management:** React Context API (centralized data flow)  
- **Logic:** async/await for timed events and conditional rendering  

---

## ✨ Key Features

### 1. Centralized State (Context API)
Moved from **Prop Drilling** (passing data through 9 layers of components) to a **Global Store**.

- **MessageProvider**
  - Manages user inputs  
  - Handles replies from Elizabeth  
  - Controls game states (home, playing, rescuing)

**Benefits:**
- Cleaner code structure  
- Easier communication between top-level `App` and deep component `SecretRoom`  

---

### 2. Multi-Scene Management
The application transitions through three distinct phases:

- **Home Scene**
  - Landing page  
  - Call-to-action supporting the original creator  
  - Manga cover link  

- **Battle Scene**
  - Core gameplay  
  - User interacts with castle layers  

- **Cinematic Scene**
  - Triggered video event  
  - Features Meliodas's **"Full Counter"** during rescue  

---

### 3. Smart Keyword Detection
- Uses:
  ```js
  .toLowerCase().includes("help")
  - Monitors Elizabeth's replies  
- Unlocks **"Go Rescue Elizabeth"** button via conditional rendering when keyword is detected  

---

## 🎬 4. Cinematic Finish
- Implemented `onEnded` event on HTML5 `<video>`  
- Ensures UI transitions precisely when animation ends  

### Final Scene Includes:
- Heart-warming reunion image  
- Smooth fade-in animation  

---

## 🏗️ Architecture Design

| Component            | Responsibility |
|---------------------|----------------|
| MessageProvider     | The "Magic Source" holding all shared states |
| 00_Home             | Landing gate with external manga support links |
| App.jsx             | "Grand Stage" controlling scene rendering |
| 01_Castle → 08_Chamber | Structural layers of the castle |
| 09_SecretRoom       | Final destination where Elizabeth resides |

---

## 🏁 Conclusion

This project evolved from a simple data-passing exercise into a **full-featured React mini-game**.

### It demonstrates:
- Complex UI state management  
- Multimedia integration  
- Efficient global data handling  

---

> **"I told you... I'd protect you." — Meliodas**
