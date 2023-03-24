import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/home';
import Gigs from '../pages/gigs';
import Gig from '../pages/gig';
import Orders from '../pages/orders';
import MyGigs from '../pages/myGigs';
import NewGig from '../pages/newGig';
import Messages from '../pages/messages';
import Message from '../pages/message';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gigs',
        element: <Gigs />,
      },
      {
        path: '/gig/:id',
        element: <Gig />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/mygigs',
        element: <MyGigs />,
      },
      {
        path: '/newGig',
        element: <NewGig />,
      },
      {
        path: '/mygigs',
        element: <MyGigs />,
      },
      {
        path: '/messages',
        element: <Messages />,
      },
      {
        path: '/message/:id',
        element: <Message />,
      },
    ],
  },
]);

export default router;
