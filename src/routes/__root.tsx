import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: Root,
});

function Root() {
	return (
		<>
			<HeadContent />
			<Outlet />
		</>
	);
}
