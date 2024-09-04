import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider, Outlet } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SingleServiceDetails from "./pages/singleServiceDetails";
import ErrorPage from "./pages/ErrorPage";
import ClientDashboard from "./pages/ClientDashboard";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
      <Route path='/' element={<Main />} errorElement={<ErrorPage />}>
          <Route index element={<div><h2>Main</h2></div>} />
          <Route path='test' element={<div><h2>Test</h2></div>} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<SingleServiceDetails />}/>
      <Route path='/signup' element={<TestPage />}>
          <Route index element={<div><h2>SignUp</h2></div>} />
          <Route path='test' element={<div><h2>Test</h2></div>} />
      </Route>
      <Route path='/ClientDashboard' element={<ClientDashboard/>}/>
    </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

function TestPage() {
  return (
    <div>
      <h2>TestPage</h2>
      <Link to="/signup/test">Test</Link>
      <Outlet /> {/* This is where the signup route will be rendered */}
    </div>
  );
}