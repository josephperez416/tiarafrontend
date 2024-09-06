import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import EmailPage from "./pages/EmailPage";
import ServiceDetails from "./pages/ServiceDetails";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
      <Route path='/' element={<Main />} errorElement={<ErrorPage />}>
          <Route index element={<div><h2>Main</h2></div>} />
          <Route path='details' element={<ServiceDetails />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup'>
          <Route path='email' element={<EmailPage />} />
      </Route>
    </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}