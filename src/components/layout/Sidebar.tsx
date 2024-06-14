const { Sider } = Layout;
import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/admin.routes";
import { sidebarItemsGenerators } from "../../utils/SidebarItemsGenerator";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const userRole = {
	ADMIN: "admin",
	FACULTY: "faculty",
	STUDENT: "student",
};

const Sidebar = () => {
	const role = "admin";

	let sidebarItems;
	switch (role) {
		case userRole.ADMIN:
			sidebarItems = sidebarItemsGenerators(adminPaths, userRole.ADMIN);
			break;
		case userRole.FACULTY:
			sidebarItems = sidebarItemsGenerators(facultyPaths, userRole.FACULTY);
			break;
		case userRole.STUDENT:
			sidebarItems = sidebarItemsGenerators(studentPaths, userRole.STUDENT);
			break;

		default:
			break;
	}

	return (
		<Sider breakpoint="lg" collapsedWidth="0">
			<div className="text-white h-14 flex justify-center items-center">
				<h1 className="text-2xl">PH University</h1>
			</div>
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={["4"]}
				items={sidebarItems}
			/>
		</Sider>
	);
};

export default Sidebar;
