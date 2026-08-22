import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import TimeLineLayout from './components/timeline/TimeLineLayout.jsx';
import StatsLayout from './components/stats/StatsLayout.jsx';
import Home from './components/homepage/Home.jsx';
import RootLayout from './components/ui/RootLayout.jsx';
import Details from './components/homepage/details/Details.jsx';
import FriendsProvider from '../public/contextApi/FriendsContext.jsx';
import ErrorComponent from './components/ui/ErrorComponent.jsx';
import GlobalSpinner from './components/ui/GlobalSpinner.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: GlobalSpinner,
    children: [{
            path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "timeline", Component: TimeLineLayout },
      { path: "stats", Component: StatsLayout },
      { path: "details/:id", Component: Details },
      // {
      //   path: "auth",
      //   Component: AuthLayout,
      //   children: [
      //     { path: "login", Component: Login },
      //     { path: "register", Component: Register },
      //   ],
      // },
      // {
      //   path: "concerts",
      //   children: [
      //     { index: true, Component: ConcertsHome },
      //     { path: ":city", Component: ConcertsCity },
      //     { path: "trending", Component: ConcertsTrending },
      //   ],
      // },
    ]
    }

    ],
    errorElement: <ErrorComponent/>
  },
  {
    
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router} ></RouterProvider>
    </FriendsProvider>
  </StrictMode>,
)
