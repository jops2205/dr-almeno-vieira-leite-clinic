import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_services/dentistry/")({
	component: Dentistry,
	head: () => ({
		meta: [
			{
				title: "Medicina Dentária",
			},
		],
	}),
});

function Dentistry() {
	return (
		<div className="grid h-80 place-items-center bg-stone-950">
			<h1 className="font-semibold text-4xl text-white">Medicina Dentária</h1>
		</div>
	);
}
