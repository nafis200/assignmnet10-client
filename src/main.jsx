import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Roots/Header.jsx';
import Error from './components/error/Error.jsx';
import Home from './components/Roots/Home.jsx';
import Authprovider from './components/provider/Authprovider.jsx';
import Login from './components/form/Login.jsx';
import Registration from './components/form/Registration.jsx';
import Alltourist from './components/toursist/Alltourist.jsx';
import Addinfor from './components/tourist/Addinfor.jsx';
import Privateroute from './components/private/Privateroute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=>fetch('http://localhost:5006/item')
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      },
      {
        path: '/tourist-spot',
        element: <Alltourist></Alltourist>,
        loader: ()=>fetch('http://localhost:5006/item')
      },
      {
         path:'/add',
         element:<Privateroute><Addinfor></Addinfor></Privateroute> ,
      },
      
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Authprovider>
     <RouterProvider router={router} />
     </Authprovider>
  </React.StrictMode>,
)
