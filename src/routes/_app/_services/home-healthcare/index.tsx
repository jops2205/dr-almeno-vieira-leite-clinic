import { createFileRoute, Link } from "@tanstack/react-router";
import { FaCheck } from "react-icons/fa6";
import { Button } from "#/components/button";
import { homeHealthcare } from "#/consts/home-healthcare";

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
		<>
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">
					Serviço ao Domicílio
				</h1>
			</div>
			<section className="flex flex-col gap-10 px-4 py-16 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:px-20 lg:py-24 2xl:px-80">
				<div className="space-y-3">
					<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
						Cuidados no seu Lar
					</h3>
					<h2 className="max-w-md font-semibold text-4xl">
						Cuidados de saúde no conforto da sua casa
					</h2>
					<p className="max-w-xl text-balance text-stone-500">
						Levamos os cuidados de saúde até si, proporcionando um
						acompanhamento personalizado e próximo, sem necessidade de
						deslocação à clínica, com o conforto e a tranquilidade do seu lar.
					</p>
				</div>
				<div className="h-fit flex-1 space-y-3 rounded-2xl border border-stone-200 bg-white p-6">
					<h3 className="font-medium text-lg">Os nossos serviços</h3>
					<div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
						{homeHealthcare.map((healthcare) => (
							<div key={healthcare} className="flex items-center gap-2">
								<div className="w-fit rounded-full bg-primary p-1 text-white">
									<FaCheck className="size-2.5" />
								</div>
								<span className="text-stone-500">{healthcare}</span>
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
							Cuide da sua saúde com cuidados personalizados, sem sair de casa.
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
