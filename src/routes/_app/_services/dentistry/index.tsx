import { createFileRoute, Link } from "@tanstack/react-router";
import { FaCheck } from "react-icons/fa6";
import { Button } from "#/components/button";
import { dentistrySpecialties } from "#/consts/specialties";

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
		<>
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">Medicina Dentária</h1>
			</div>
			<section className="flex justify-between px-80 py-24">
				<div className="space-y-3">
					<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
						Cuidados Dentários
					</h3>
					<h2 className="max-w-md font-semibold text-4xl">
						Cuide do seu sorriso com confiança e acompanhamento especializado
					</h2>
					<p className="max-w-xl text-balance text-stone-500">
						Conte com uma equipa dedicada à prevenção, diagnóstico e tratamento,
						com cuidados personalizados para manter a saúde e o bem-estar do seu
						sorriso.
					</p>
				</div>
				<div className="flex-1 space-y-6">
					<div className="space-y-6 rounded-2xl bg-primary/10 p-6 text-primary">
						<p className="font-medium">
							Na Clínica Dr. Almeno Vieira Leite, disponibilizamos cuidados de
							medicina dentária adaptados às necessidades de cada pessoa, desde
							a prevenção e acompanhamento regular aos tratamentos necessários
							para preservar a saúde oral.
						</p>
						<Link to="/appointments">
							<Button className="py-1.5">Marcar Consulta</Button>
						</Link>
					</div>
					<div className="space-y-3 rounded-2xl border border-stone-200 bg-white p-6">
						<h3 className="font-medium text-lg">
							Os nossos cuidados de medicina dentária
						</h3>
						<div className="grid grid-cols-2 gap-1.5">
							{dentistrySpecialties.map((specialty) => (
								<div key={specialty} className="flex items-center gap-2">
									<div className="w-fit rounded-full bg-primary p-1 text-white">
										<FaCheck className="size-2.5" />
									</div>
									<span className="text-stone-500">{specialty}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="bg-primary px-80 py-24">
				<div className="flex items-end justify-between">
					<div className="space-y-3 text-white">
						<h3 className="font-semibold text-sm uppercase tracking-widest">
							Estamos aqui para si
						</h3>
						<h2 className="max-w-md font-semibold text-4xl">
							Cuide da sua saúde oral com a confiança de estar em boas mãos.
						</h2>
					</div>
					<Link to="/contacts" className="outline-none">
						<Button className="border-2 border-white bg-white text-primary hover:border-white hover:bg-primary hover:text-white">
							Fale Connosco
						</Button>
					</Link>
				</div>
			</section>
		</>
	);
}
