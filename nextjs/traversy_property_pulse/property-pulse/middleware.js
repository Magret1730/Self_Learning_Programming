// Middleware for protected routes

export { default } from 'next-auth/middleware'; // thi smakes all routes protected. No hitting any route except you're logged in

// Specifies the protected routes. You can only hit these set of routes except you're logged in
export const config = {
  matcher: ['/properties/add', '/profile', '/properties/saved', '/messages'],
}
