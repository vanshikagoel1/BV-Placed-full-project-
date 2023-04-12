import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import ManageResources from "./pages/ManageResources/ManageResources";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { path: "/home", element: <Landing /> },
  { path: "/Dashboard", element: <Dashboard /> },
  { path: "/Profile", element: <Profile /> },
  { path: "/Admin", element: <AdminDashboard /> },
  { path: "/ManageResources", element: <ManageResources /> }

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
