import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import NotFound from './pages/NotFound.tsx'
import RedirectToPowerSeries from './utils/RedirectToPowerSeries.tsx'
import RedirectToMeet from './utils/RediectToMeet.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App moveToSection = {'section1'}/>,
  },
  {
    path: "/power-series",
    element: <RedirectToPowerSeries />,
  },
  {
    path: "/general-member",
    element: <App moveToSection ={'section3'}/>,
  },
  {
    path: "/python-for-automation",
    element: <RedirectToMeet/>,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
