import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import 'react-toastify/dist/ReactToastify.css';
import ManageResources from "./pages/ManageResources/ManageResources";
import {  createHashRouter, RouterProvider } from "react-router-dom";
import ViewJob from "./pages/ViewJob/ViewJob";
import ViewApplicants from "./pages/ViewApplicants/ViewApplicants";




const router = createHashRouter([
  { path: "/", element: <Landing /> },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/dashboard", element: <Dashboard />,
},
  {path:"/jobs/:jobid/",element:<ViewJob />},
  {path:"/applicants/:jobid/",element:<ViewApplicants />},
  { path: "/profile", element: <Profile /> },
  { path: "/admin", element: <AdminDashboard /> },
  { path: "/manageresources", element: <ManageResources /> }

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
