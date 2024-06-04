import "@/assets/styles/globals.css";

export const metadata = {
	title: "Property Pulse",
	description: "find your dream rental",
};

const MainLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div>{children}</div>
			</body>
		</html>
	);
};

export default MainLayout;
