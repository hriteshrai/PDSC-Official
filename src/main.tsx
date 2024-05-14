import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import RedirectToPowerSeries from './utils/RedirectToPowerSeries.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/power-series",
    element: <RedirectToPowerSeries />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
