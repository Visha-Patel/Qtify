import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import { ErrorBoundary } from "react-error-boundary";
import HomePage from './pages/HomePage/HomePage';
import AlbumPage from './pages/AlbumPage/AlbumPage';

// Error fallback component
const FallbackComponent = ({ error }) => (
  <div className="error-container">
    <h2>Something went wrong</h2>
    <p>{error.message}</p>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <App />
      </ErrorBoundary>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />, // Fixed the typo here
      },
      {
        path: "album/:albumId",
        element: <AlbumPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);