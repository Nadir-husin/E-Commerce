# E-Commerce Web Application

A responsive e-commerce frontend built with React and TypeScript. It provides product browsing, authentication, shopping-cart management, and user-specific wishlists through a modular architecture.

## Features

- Browse products by category
- Register and log in to a user account
- Validate forms and check email availability
- Protect account-specific routes
- Add products to a persistent shopping cart
- Update quantities, remove items, and calculate the subtotal
- Add and remove products from a user-specific wishlist
- Display loading skeletons, empty states, and API errors
- Lazy-load routes to reduce the initial application bundle

## Technologies

- React 19 and TypeScript
- Redux Toolkit and Redux Persist
- React Router and Axios
- React Hook Form and Zod
- Bootstrap, React Bootstrap, and Tailwind CSS
- Vite and Lottie React

## Architecture

The application uses reusable components and custom hooks, feature-based Redux slices, asynchronous thunks, shared TypeScript models, centralized API configuration, and Zod validation schemas. Redux Persist retains authentication and cart state after a refresh.

## Getting Started

Requirements: Node.js 20 or later, npm, and a compatible REST API running at `http://localhost:5005`.

```bash
git clone <repository-url>
cd ecommerce
npm install
npm run dev
```

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Type-check and create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build
```

## Key Implementation Details

- Route-level code splitting with `React.lazy` and `Suspense`
- Typed Redux hooks and feature-based Redux slices
- Persistent authentication and shopping-cart state
- Protected wishlist and profile routes
- Schema-based registration and login validation
- Asynchronous email-availability validation
- User-specific wishlist synchronization with the REST API
- Reusable loading, skeleton, error, and empty-state components

## Current Scope

The core product browsing, authentication, cart, and wishlist experiences are implemented. The profile and order-management areas are currently being developed.
