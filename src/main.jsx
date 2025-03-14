import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/pages/Root';
import Home from './components/pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
