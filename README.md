# Mini Job Portal — React Router Learning Project

A small **Mini Job Portal** built with React and Vite to learn and practice **React Router** concepts through a simple real-world example.

This project is focused more on **understanding how routing works** than on UI design or advanced features.
## 📝 Blog

I wrote about my learning journey and what I learned about React Router while building this project.

👉 [What Building a Mini Job Portal Taught Me About React Router](https://medium.com/@dikshasomwanshi24/what-building-a-mini-job-portal-taught-me-about-react-router-2245d560e3c9)

## 🎯 Purpose

The main goal of this project is to understand how different React Router concepts work together:

* URL-based routing
* Navigation between pages
* Dynamic routes
* Nested routes
* Programmatic navigation
* Handling unknown URLs

## 🛠️ Tech Stack

* React
* Vite
* React Router DOM
* JavaScript
* HTML & CSS

## 📚 React Router Concepts Learned

* `BrowserRouter`
* `Routes`
* `Route`
* `Link`
* `NavLink`
* Active navigation state
* `useNavigate()`
* Dynamic Routes (`:id`)
* `useParams()`
* Nested Routes
* `Outlet`
* Wildcard Route (`*`) / 404 page

## 🗂️ Routes

| Route        | Purpose     |
| ------------ | ----------- |
| `/`          | Home        |
| `/jobs`      | All Jobs    |
| `/jobs/:id`  | Job Details |
| `/about`     | About       |
| `/login`     | Login       |
| `/dashboard` | Dashboard   |
| `*`          | 404 Page    |

## 🔄 Main Routing Flow

```text
URL
 ↓
BrowserRouter
 ↓
Routes
 ↓
Route Matching
 ↓
Component Rendering
```

For dynamic jobs:

```text
/jobs/101
   ↓
jobs/:id
   ↓
useParams()
   ↓
id = 101
```

For programmatic navigation:

```text
Login Button
     ↓
useNavigate()
     ↓
/dashboard
```

## 🚀 Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
```

Go into the project:

```bash
cd mini-job-portal
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## 📌 Project Status

This project is a **learning/practice project** created to understand React Router fundamentals.

The focus is on learning the routing concepts and how they work together rather than building a complete job portal.

## 👩‍💻 Author

**Diksha Somwanshi**

B.E. Computer Engineering Graduate
