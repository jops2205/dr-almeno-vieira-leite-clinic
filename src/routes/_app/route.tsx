import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Footer } from "#/components/footer";
import { Header } from "#/components/header";

export const Route = createFileRoute("/_app")({
	component: AppLayout,
});

function AppLayout() {
	return (
		<div className="flex min-h-svh flex-col">
			<Header />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
