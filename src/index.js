import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, redirect, RouterProvider} from 'react-router-dom';
import 'react-dom';
import './components/Header';
import IndexMain from './indexMain';
import IndexBlog from './indexBlog';
import IndexForm from './indexFormulaire';

const router = createBrowserRouter([
  {
    path : "/",
    loader: async({params})=>{
      const response = await fetch('http://localhost:3000/posts');
      const data = await response.json();
      return { data };
    },
    element: <IndexMain />
  },
  {
    path : "/Details/:id",
    loader: async({params})=>{
      const response = await fetch(`http://localhost:3000/posts/${params.id}`);
      const data = await response.json();
      return { data };
    },
    element: <IndexBlog/>
  },
  {
    path : "/Process",
    action: async({request}) =>{
      let formData = await request.formData();
      return redirect('/')
    },
  },
  {
    path : "/HiddedFormulaire",
    element: <IndexForm/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
