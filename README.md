# 🛍️ Fashion Mania — Mini Fashion Store

Fashion Mania is a modern mini e-commerce web application built with React.
Users can browse fashion products, filter by categories, search items, sort by price, and manage a dynamic shopping cart.

---

## 🌐 Live Demo

https://mini-fashion-store.vercel.app

---

## ✨ Features

* 🛍️ **Product Catalog** — browse fashion items across multiple categories
* 🧥 **Category Filtering** — filter by Dresses, Tops, Jackets, Bags, and Pants
* 🔍 **Search Functionality** — search products and view results separately
* ↕️ **Sorting** — sort products by price (low to high / high to low)
* 🛒 **Shopping Cart** — add items with quantity selection
* 🔢 **Quantity Management** — increase or decrease items in the cart
* 💰 **Cart Total Calculation** — dynamic total using JavaScript `reduce()`
* 🧺 **Cart Dropdown** — toggle cart view with outside click handling
* ❌ **Remove Items** — decrease quantity or remove items from cart
* 🎯 **Conditional UI** — show hero, filters, and search results dynamically
* 📱 **Responsive Design** — works across desktop and mobile devices

---

## 🛠️ Built With

* React — UI library
* Vite — build tool and dev server
* JavaScript (ES6)
* CSS — custom styling
* React Hooks (`useState`, `useEffect`, `useRef`)

---

## 🚀 Getting Started

### Prerequisites

* Node.js installed

### Installation

Clone the repository:

```bash
git clone https://github.com/muktamehra/mini-fashion-project.git
cd mini-fashion-store
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser at:

```bash
http://localhost:5173
```

---

## 📁 Project Structure

```
src/
├── data/ 
|   └── products.js    # Product data  
├── App.jsx            # Main logic (state, filtering, sorting, cart)
├── Header.jsx         # Navigation, search, cart dropdown
├── Hero.jsx           # Hero banner section
├── ProductCard.jsx    # Product display and add-to-cart logic
├── Footer.jsx         # Footer section
├── App.css
├── Header.css
├── Hero.css
├── ProductCard.css
└── Footer.css
```

---

## 💡 React Concepts Used

| Concept               | Where Used                                    |
| --------------------- | --------------------------------------------- |
| `useState`            | Managing cart, filters, search, and sorting   |
| `useEffect`           | Handling outside click for cart dropdown      |
| `useRef`              | Detecting clicks outside the cart             |
| Props                 | Passing data and functions between components |
| Conditional Rendering | Showing hero, filters, and search results     |
| Array Methods         | `map`, `filter`, `find`, `reduce`, `sort`     |
| Derived State         | cartTotal and total price calculations        |

---

## 🔑 Key Features Implementation

### Cart Management

Adds items, updates quantities, and removes items dynamically using immutable state updates.

### Search System

Separates typing (`search`) from execution (`activeSearch`) for better UX.

### Filtering & Sorting

Combines category filtering, search filtering, and sorting in a clean pipeline.

### Outside Click Handling

Closes cart dropdown when clicking outside using `useRef` and `useEffect`.

---

## 🌐 Deployment

Deployed on Vercel with automatic deployments on every push to the `main` branch.

---

## 👨‍💻 Author

Mukta Mehra
https://github.com/muktamehra

---

## 📝 License

This project is open source and available under the MIT License.
