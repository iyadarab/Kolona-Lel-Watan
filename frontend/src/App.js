import React from 'react';
// react router dom
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

const browserRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/register',
    element:<Register />
  }
  ]);

function App() {
  return (
    <div>
      <RouterProvider router={browserRouter}/>
    </div>
  );
}

export default App;
