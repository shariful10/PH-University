import { Layout } from "antd";
import Sidebar from "./Sidebar";
const { Header, Content } = Layout;
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<Layout className="h-screen">
			<Sidebar />
			<Layout>
				<Header className="p-0" />
				<Content className="mt-6 mb-0 mx-4">
					<div className="p-6 min-h-[360px]">
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default MainLayout;
