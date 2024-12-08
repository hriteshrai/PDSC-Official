import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import NotFound from './pages/NotFound.tsx'
import RedirectToPowerSeries from './utils/RedirectToPowerSeries.tsx'
import CodeOfConduct from './pages/code_of_conduct/codeOfConduct.tsx'
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
    path: "/code-of-conduct",
    element: <CodeOfConduct />,
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
    path: "*",
    element: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
