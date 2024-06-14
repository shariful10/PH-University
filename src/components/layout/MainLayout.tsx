import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
import { adminPaths } from "../../routes/admin.routes";
import { sidebarItemsGenerators } from "../../utils/SidebarItemsGenerator";

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
					items={sidebarItemsGenerators(adminPaths, "admin")}
				/>
			</Sider>
			<Layout>
				<Header className="p-0" />
				<Content className="mt-6 mb-0 mx-4">
					<div className="p-6 min-h-[360px]">
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
