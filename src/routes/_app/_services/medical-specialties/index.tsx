import { createFileRoute, Link } from "@tanstack/react-router";
import { FaCheck } from "react-icons/fa6";
import { Button } from "#/components/button";
import { medicalSpecialties } from "#/consts/specialties";

export const Route = createFileRoute("/_app/_services/medical-specialties/")({
	component: MedicalSpecialties,
	head: () => ({
		meta: [
			{
				title: "Especialidades Médicas",
			},
		],
	}),
});

function MedicalSpecialties() {
	return (
		<>
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">
					Especialidades Médicas
				</h1>
			</div>
			<section className="flex justify-between px-80 py-24">
				<div className="space-y-3">
					<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
						Cuidados Especializados
					</h3>
					<h2 className="max-w-md font-semibold text-4xl">
						Cuidados médicos próximos, personalizados e especializados
					</h2>
					<p className="max-w-xl text-balance text-stone-500">
						Conte com uma equipa clínica experiente, dedicada a avaliar,
						acompanhar e cuidar da sua saúde em todas as fases da vida.
					</p>
				</div>
				<div className="flex-1 space-y-6">
					<div className="space-y-6 rounded-2xl bg-primary/10 p-6 text-primary">
						<p className="font-medium">
							Na Clínica Dr. Almeno Vieira Leite, reunimos diferentes
							especialidades médicas para lhe proporcionar um acompanhamento
							completo, próximo e devidamente coordenado.
						</p>
						<Link to="/appointments">
							<Button className="py-1.5">Marcar Consulta</Button>
						</Link>
					</div>
					<div className="space-y-3 rounded-2xl border border-stone-200 bg-white p-6">
						<h3 className="font-medium text-lg">
							As nossas especialidades médicas
						</h3>
						<div className="grid grid-cols-2 gap-1.5">
							{medicalSpecialties.map((specialty) => (
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
							Cuide da sua saúde com a confiança de estar em boas mãos.
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
