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
			<section className="flex h-80 items-center justify-center bg-stone-950 p-6">
				<h1 className="text-center font-semibold text-3xl text-white sm:text-4xl">
					Acordos e Convenções
				</h1>
			</section>
			<section className="flex justify-center px-6 py-12 sm:px-12 lg:py-24">
				<div className="flex max-w-xl flex-col gap-12 xl:w-full xl:max-w-293">
					<div className="max-w-xl space-y-3 text-balance">
						<h3 className="font-semibold text-primary text-xs uppercase tracking-widest sm:text-sm">
							Parceiros de saúde
						</h3>
						<h2 className="font-semibold text-3xl sm:text-4xl">
							Convenções disponíveis
						</h2>
						<div className="space-y-1.5 text-sm text-stone-500 sm:text-base">
							<p>
								A Clínica Dr. Almeno Vieira Leite tem acordos, convenções e
								condições especiais para os beneficiários dos principais
								seguros, subsistemas de saúde e outras entidades.
							</p>
							<p>
								Algumas consultas e atos médicos poderão não estar abrangidos,
								pelo que, em casa de dúvida, contacte-nos.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
						{agreements.map(({ name, src }) => (
							<div
								key={name}
								className="grid min-h-48 w-60 place-items-center p-4 sm:min-h-40 xl:min-h-0">
								<img src={src} alt={name} />
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
