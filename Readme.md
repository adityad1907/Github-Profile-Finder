# 🔍 GitHub Profile Finder

A responsive web application that enables users to look up GitHub accounts, inspect user profiles, and explore public repositories directly via the GitHub REST API.

## 🌐 Live Application

Access the deployed project on Vercel:

👉 [**https://github-profile-finder-two-livid.vercel.app/**](https://github-profile-finder-two-livid.vercel.app/)

## ✨ Features

* **Instant Username Lookup:** Search any public GitHub user profile by username.
* **Detailed Profile Information:**
  * Profile avatar and full display name
  * Bio and account creation / joined date
  * Location, company, and personal portfolio / website link
  * Twitter / social handle (if available)
* **Repository & Activity Stats:**
  * Total public repositories
  * Total followers & following count
  * Direct links to public repositories
* **Responsive Layout:** Optimized for mobile screens, tablets, and desktop displays.
* **User Feedback & Error Handling:** Clear visual states when a user profile is not found or when network issues occur.

## 🛠️ Tech Stack

* **Client:** HTML5, CSS3, JavaScript (ES6+)
* **API:** [GitHub REST API v3](https://docs.github.com/en/rest)
* **Deployment & Hosting:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

Follow these steps to run a local copy of this project on your machine.

### Prerequisites

* A modern web browser (Google Chrome, Firefox, Safari, Edge)
* [Git](https://git-scm.com/) installed on your machine
* *(Optional)* [Node.js](https://nodejs.org/) & `npm` if you are using a development bundler/framework

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adityad1907/Github-Profile-Finder.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd Github-Profile-Finder
   ```

3. **Run the application:**
   * **For Vanilla JS / HTML / CSS:**
     Simply open `index.html` in your web browser, or serve it using the VS Code Live Server extension.
   * **For Node / Vite / React based projects:**
     ```bash
     npm install
     npm run dev
     ```

4. Open `http://localhost:3000` (or `http://localhost:5173`) in your browser to view the application.

## 📡 API Reference

This project fetches publicly accessible user profile information using the official GitHub REST API endpoint:

```http
GET https://api.github.com/users/{username}
```

#### Example Response Attributes:

| Field | Type | Description |
| :--- | :--- | :--- |
| `avatar_url` | `string` | Link to the user's avatar image |
| `name` | `string` | Display name of the user |
| `bio` | `string` | Bio / description from the profile |
| `public_repos` | `number` | Count of public repositories |
| `followers` | `number` | Number of followers |
| `following` | `number` | Number of followed accounts |

## 📦 Deployment on Vercel

This application is set up for continuous deployment on Vercel.

1. Push your latest code to your GitHub repository.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import `adityad1907/Github-Profile-Finder`.
4. Leave standard settings or specify your build command, then click **Deploy**.

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Aditya Deshmukh**
* GitHub: [@adityad1907](https://github.com/adityad1907)
* Live Project: [GitHub Profile Finder](https://github-profile-finder-two-livid.vercel.app/)