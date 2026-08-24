import { createFileRoute } from "@tanstack/react-router";
import { agreements } from "#/consts/agreements";

export const Route = createFileRoute("/_app/agreements/")({
	component: Agreements,
	head: () => ({
		meta: [
			{
				title: "Acordos e Convenções",
			},
		],
	}),
});

function Agreements() {
	return (
		<>
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">
					Acordos e Convenções
				</h1>
			</div>
			<div className="space-y-16 px-80 py-24">
				<div className="space-y-3">
					<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
						Parceiros de saúde
					</h3>
					<h2 className="font-semibold text-4xl">Convenções disponíveis</h2>
					<p className="max-w-xl text-stone-500">
						Consulte as entidades com as quais temos acordo e facilite o acesso
						aos cuidados de saúde. A cobertura pode variar consoante o ato
						médico e o seu plano.
					</p>
				</div>
				<div className="grid grid-cols-4 place-items-center gap-12">
					{agreements.map(({ name, src }) => (
						<div
							key={name}
							className="grid min-w-52 max-w-52 place-items-center p-4">
							<img src={src} alt={name} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
