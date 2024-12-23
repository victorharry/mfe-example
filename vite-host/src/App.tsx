import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Counter from "remote/App"
import './App.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Hello from Host!</h1>,
    },
    {
      path: "remote",
      element: <Counter />
    },
    // {
    //   path: "remote",
    //   async lazy() {
    //     let Counter = await import("remote/App");
    //     return { Component: Counter.default };
    //   },
    // },
  ]);

const App = () => <RouterProvider router={router} />;

export default App
