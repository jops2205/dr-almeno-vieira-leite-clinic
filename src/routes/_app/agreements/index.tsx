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
			<div className="page-hero">
				<div className="page-shell">
					<p className="mb-3 font-semibold text-primary text-sm uppercase tracking-widest">
						Acesso simplificado
					</p>
					<h1 className="font-semibold text-4xl text-white md:text-5xl">
						Acordos e Convenções
					</h1>
					<p className="mt-4 max-w-xl text-white/70">
						Cuidados mais acessíveis, com parceiros de confiança.
					</p>
				</div>
			</div>
			<div className="page-shell flex flex-col gap-12 py-12 md:py-20">
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
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
