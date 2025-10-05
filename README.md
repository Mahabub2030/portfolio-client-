# Mahabub Alam Portfolio (Frontend)

![Portfolio Banner](./public/banner.png)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This is the **frontend of my personal portfolio website**, built with **Next.js** and **TypeScript**.  
The portfolio allows public visitors to explore my **About Me section, Projects, and Blogs**, while providing a secure **owner dashboard** to manage content dynamically.

The site is fully **responsive**, optimized for performance, and provides a **clean, modern UI/UX**.

---

## Features

### Public Pages

- **About Me Section** – Personal info, education, skills, and work experience.
- **Projects Showcase** – Display projects with thumbnail, live link, description, and features.
- **Blog Management (Public)** – View all blogs and individual blog posts.
- **Responsive Design** – Works perfectly on mobile, tablet, and desktop.
- **Optimized Loading** – Uses SSG and ISR for fast page loads.

### Private Pages (Owner Only)

- **Authentication & Authorization** – Secure login system using JWT.
- **Dashboard** – Manage blogs and projects dynamically.
- **Rich Text Editor** – Create/edit blog posts and project content with formatting options.

### UI/UX Enhancements

- Smooth transitions and animations
- Carousel and cards for project showcase
- Skeleton loaders for better experience
- Notifications using `react-hot-toast`

---

## Tech Stack

**Frontend:**

- [Next.js](https://nextjs.org/) – React framework for production
- [TypeScript](https://www.typescriptlang.org/) – Strong typing for better development
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [react-hot-toast](https://react-hot-toast.com/) – Toast notifications
- [React Quill](https://github.com/zenoamaro/react-quill) – Rich text editor

**Backend:**

- Node.js + Express.js
- PostgreSQL + Prisma ORM
- JWT + bcrypt for secure authentication

---

## Installation

### Clone Repository

```bash
git clone https://github.com/<your-username>/portfolio-frontend.git
cd portfolio-frontend
```
