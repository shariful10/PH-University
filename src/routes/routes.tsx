import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import { createBrowserRouter } from "react-router-dom";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
	{
		path: "/admin",
		element: <App />,
		children: [
			{
				index: true,
				element: <AdminDashboard />,
			},
			{
				path: "create-student",
				element: <CreateStudent />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

export default router;
