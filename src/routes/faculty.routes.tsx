import OfferedCourse from "../pages/faculty/OfferedCourse";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";

export const facultyPaths = [
	{
		name: "Faculty Dashboard",
		path: "faculty-dashboard",
		element: <FacultyDashboard />,
	},
	{
		name: "Offered Course",
		path: "offered-course",
		element: <OfferedCourse />,
	},
];
