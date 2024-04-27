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
import Touristdetails from './components/toursist/Touristdetails.jsx';
import Mylist1 from './components/mylist/Mylist1.jsx';
import UpdateList from './components/mylist/UpdateList.jsx';
import Country from './components/Roots/Country.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=>fetch('https://module-57-2.vercel.app/item')
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
        loader: ()=>fetch('https://module-57-2.vercel.app/item')
      },
      {
         path:'/add',
         element:<Privateroute><Addinfor></Addinfor></Privateroute> ,
      },
      {
         path:`/item/:id`,
         element: <Privateroute><Touristdetails></Touristdetails></Privateroute>,
         loader: ()=>fetch('https://module-57-2.vercel.app/item')
      },
      {
         path:'/mylist',
         element:<Privateroute><Mylist1></Mylist1></Privateroute>,
         loader: ()=>fetch('https://module-57-2.vercel.app/item')
      },
      {
        path:'/updatelist/:id',
        element:<Privateroute><UpdateList></UpdateList></Privateroute> ,
        loader : ({params})=> fetch(`https://module-57-2.vercel.app/item/${params.id}`)
      },
      {
         path:'/country/:id',
         element:<Country></Country>,
         loader: ()=>fetch('https://module-57-2.vercel.app/item')
        
      }
      
      
      
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
