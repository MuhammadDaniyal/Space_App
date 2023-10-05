import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import ContactUs from './Pages/ContactPage/ContactPage'
import FormComponent from './components/FormComponent/FormComponent'
import AnalysisReport from './components/AnalysisReport/AnalysisReport'

const App = () => {
  /** Root Routes */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <ContactUs />
    },
    {
      path: '/form',
      element: <FormComponent />
    },
    {
      path: '/previousanalysis',
      element: <AnalysisReport />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App