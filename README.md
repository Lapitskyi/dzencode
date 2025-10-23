# 🧩 CRM — Product and Order Management

A simple **CRM system** for managing products and orders, built with **React + TypeScript**.  
The app simulates backend interaction using mock data and `axios` requests.

---

## 🚀 Features

- 📦 View and filter products
- 🧾 Manage orders
- 🔍 Filter by type and specification

---

## 🛠️ Technologies

| Technology | Purpose |
|-------------|----------|
| ⚛️ React + Vite | Core framework and bundler |
| 🧑‍💻 TypeScript | Type safety |
| 🎨 Bootstrap 5 + Sass | Styling & responsive design |
| 🧠 Zustand | State management |
| 🌐 Axios | Mock API requests |
| 🧰 ESLint | Code linting |

---

## ⚙️ Installation

# Docker

# Build Docker image
docker build -t dzencode .

# Run container in background (port 8080)
docker run -d --name dzencode -p 8080:80 dzencode

# Stop and remove container
docker stop dzencode
docker rm dzencode

- Access the app: http://localhost:8080
- If port 8080 is busy, use another port, e.g.: -p 3000:80
- Node version in container: Node 20 (recommended to match local dev environment)


```bash
# Clone the repository
git clone https://github.com/Lapitskyi/dzencode.git

# Navigate to project folder
cd dzencode

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview


