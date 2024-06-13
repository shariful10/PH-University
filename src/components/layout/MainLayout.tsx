import { Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
	{
		key: "rg1hth1ir2eh",
		label: "Dashboard",
	},
	{
		key: "hi3q5y9o5y",
		label: "Profile",
	},
	{
		key: "wry78785yhg",
		label: "User Management",
		children: [
			{
				key: "rg1hth1ir2e3h",
				label: "Create Admin",
			},
			{
				key: "hi3q5y9o53y",
				label: "Crete Student",
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
