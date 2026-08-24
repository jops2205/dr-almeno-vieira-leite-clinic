import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_services/home-healthcare/")({
	component: HomeHealthcare,
	head: () => ({
		meta: [
			{
				title: "Serviço ao Domicílio",
			},
		],
	}),
});

function HomeHealthcare() {
	return (
		<div className="grid h-80 place-items-center bg-stone-950">
			<h1 className="font-semibold text-4xl text-white">
				Serviço ao Domicílio
			</h1>
		</div>
	);
}
