import { createFileRoute, Link } from "@tanstack/react-router";
import { FaCheck } from "react-icons/fa6";
import { Button } from "#/components/button";
import { nursing } from "#/consts/nursing";

export const Route = createFileRoute("/_app/_services/nursing/")({
	component: Nursing,
	head: () => ({
		meta: [
			{
				title: "Enfermagem",
			},
		],
	}),
});

function Nursing() {
	return (
		<>
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">Enfermagem</h1>
			</div>
			<section className="flex flex-col gap-10 px-4 py-16 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:px-20 lg:py-24 2xl:px-80">
				<div className="space-y-3">
					<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
						Cuidados de Enfermagem
					</h3>
					<h2 className="max-w-md font-semibold text-4xl">
						Cuidados de enfermagem com proximidade e dedicação
					</h2>
					<p className="max-w-xl text-balance text-stone-500">
						Prestamos cuidados de enfermagem personalizados, com acompanhamento
						próximo e atenção às necessidades de cada pessoa, promovendo o seu
						conforto, bem-estar e recuperação.
					</p>
				</div>
				<div className="h-fit flex-1 space-y-3 rounded-2xl border border-stone-200 bg-white p-6">
					<h3 className="font-medium text-lg">Os nossos cuidados</h3>
					<div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
						{nursing.map((nursing) => (
							<div key={nursing} className="flex items-center gap-2">
								<div className="w-fit rounded-full bg-primary p-1 text-white">
									<FaCheck className="size-2.5" />
								</div>
								<span className="text-stone-500">{nursing}</span>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="bg-primary px-4 sm:px-8 lg:px-20 2xl:px-80 py-24">
				<div className="flex items-end justify-between">
					<div className="space-y-3 text-white">
						<h3 className="font-semibold text-sm uppercase tracking-widest">
							Estamos aqui para si
						</h3>
						<h2 className="max-w-md font-semibold text-4xl">
							Cuide da sua saúde com o acompanhamento de profissionais de
							enfermagem.
						</h2>
					</div>
					<Link to="/contacts" className="outline-none">
						<Button className="border-2 border-white bg-white text-primary hover:border-white hover:bg-primary hover:text-white">
							Fale connosco
						</Button>
					</Link>
				</div>
			</section>
		</>
	);
}
