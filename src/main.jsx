import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage.jsx';
import ContentApp from './Components/Documents.jsx';
import Deadline from './Components/DeadLine.jsx';
const meta = {
  title: 'Some Meta Title',
  description: 'I am a description, and I can create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
      charset: 'utf-8',
      name: {
          keywords: 'react,meta,document,html,tags'
      }
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App  {...meta}  />,
    errorElement: <App  {...meta} > <ErrorPage /> </App>,
    children: [
      {
        path: "/deadline",
        element: <Deadline />,
      },
      {
        path: "/documents",
        element: <ContentApp />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


