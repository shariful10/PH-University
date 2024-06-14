import { ReactNode } from "react";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";

type TRoutes = {
	path: string;
	element: ReactNode;
};

const adminPaths = [
	{
		name: "Dashboard",
		path: "/admin",
		element: <AdminDashboard />,
	},
	{
		name: "User Management",
		children: [
			{
				name: "Create Admin",
				path: "create-admin",
				element: <CreateAdmin />,
			},
			{
				name: "Create Faculty",
				path: "create-faculty",
				element: <CreateFaculty />,
			},
			{
				name: "Create Student",
				path: "create-student",
				element: <CreateStudent />,
			},
		],
	},
];

export const adminRoutes = adminPaths.reduce((acc: TRoutes[], item) => {
	if (item.path && item.element) {
		acc.push({
			path: item.path,
			element: item.element,
		});
	}

	if (item.children) {
		item.children.forEach((child) => {
			acc.push({
				path: child.path,
				element: child.element,
			});
		});
	}
	return acc;
}, []);

// export const adminPaths = [
// 	{
// 		index: true,
// 		element: <AdminDashboard />,
// 	},
// 	{
// 		path: "create-admin",
// 		element: <CreateAdmin />,
// 	},
// 	{
// 		path: "create-faculty",
// 		element: <CreateFaculty />,
// 	},
// 	{
// 		path: "create-student",
// 		element: <CreateStudent />,
// 	},
// ];
