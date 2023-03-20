import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Contact, Error404, Hero, Hobbies, Layout, Portfolio, Resume, Skills } from "./pages";



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error404 />,
      children: [
        { path: '/', element: <Hero /> },
        { path: '/about', element: <About /> },
        { path: '/skills', element: <Skills /> },
        { path: '/contact', element: <Contact /> },
        { path: '/hobbies', element: <Hobbies /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/resume', element: <Resume /> },

      ]
    }

  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
