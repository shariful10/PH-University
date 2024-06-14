import { Layout, Menu, MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { NavLink, Outlet } from "react-router-dom";

const items: MenuProps["items"] = [
	{
		key: "Dashboard",
		label: <NavLink to="/admin">Dashboard</NavLink>,
	},
	{
		key: "User Management",
		label: "User Management",
		children: [
			{
				key: "Create Admin",
				label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
			},
			{
				key: "Create Faculty",
				label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
			},
			{
				key: "Create Student",
				label: <NavLink to="/admin/create-student">Create Student</NavLink>,
			},
		],
	},
];

const MainLayout = () => {
	return (
		<Layout className="h-screen">
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<div className="text-white h-14 flex justify-center items-center">
					<h1 className="text-2xl">PH University</h1>
				</div>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["4"]}
					items={items}
				/>
			</Sider>
			<Layout>
				<Header style={{ padding: 0 }} />
				<Content style={{ margin: "24px 16px 0" }}>
					<div style={{ padding: 24, minHeight: 360 }}>
						<Outlet />
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					PH University ©{new Date().getFullYear()} Created by Shariful Islam.
				</Footer>
			</Layout>
		</Layout>
	);
};

export default MainLayout;
