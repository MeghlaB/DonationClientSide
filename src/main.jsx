import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import AuthProvider from './AddProvider/AuthProvider.jsx'
import ThemeProvider from './AddProvider/ThemeProvider.jsx'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
 
  <StrictMode>


<div>
<ThemeProvider>
 
 <AuthProvider>
   <RouterProvider router={router}>
</RouterProvider>
   </AuthProvider>
 
  </ThemeProvider>
</div>
  </StrictMode>,
)
