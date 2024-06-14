import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
	{
		name: "Student Dashboard",
		path: "student-dashboard",
		element: <StudentDashboard />,
	},
	{
		name: "Offered Course",
		path: "offered-course",
		element: <OfferedCourse />,
	},
];
