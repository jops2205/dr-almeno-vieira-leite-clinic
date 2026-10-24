import { createFileRoute, Link } from "@tanstack/react-router";
import { FaCheck } from "react-icons/fa6";
import { Button } from "#/components/button";
import { healthSpecialties } from "#/consts/specialties";

export const Route = createFileRoute("/_app/_services/health-specialties/")({
	component: HealthSpecialties,
	head: () => ({
		meta: [
			{
				title: "Especialidades Não Médicas",
			},
		],
	}),
});

function HealthSpecialties() {
	return (
		<>
			<section className="flex h-80 items-center justify-center bg-stone-950 p-6">
				<h1 className="text-center font-semibold text-3xl text-white sm:text-4xl">
					Especialidades Não Médicas
				</h1>
			</section>
			<section className="flex justify-center px-6 py-12 sm:px-12 lg:py-24">
				<div className="flex flex-col gap-12 xl:flex-row xl:gap-24">
					<div className="max-w-xl space-y-3">
						<h3 className="font-semibold text-primary text-xs uppercase tracking-widest sm:text-sm">
							Cuidados especializados
						</h3>
						<h2 className="text-balance font-semibold text-3xl sm:text-4xl">
							Cuidados especializados para o seu bem-estar
						</h2>
						<p className="text-balance text-sm text-stone-500 sm:text-base">
							Conte com profissionais especializados que o acompanham de forma
							próxima e personalizada, contribuindo para a sua saúde, bem-estar
							e qualidade de vida.
						</p>
					</div>
					<div className="h-fit max-w-xl space-y-3 rounded-2xl border border-stone-200 bg-white p-6">
						<h3 className="text-balance font-medium sm:text-lg">
							As nossas especialidades
						</h3>
						<div className="grid xs:grid-cols-2 gap-x-6 gap-y-2">
							{healthSpecialties.map((specialty) => (
								<div key={specialty} className="flex items-start gap-2">
									<div className="w-fit rounded-full bg-primary p-1 text-white">
										<FaCheck className="size-2 sm:size-2.5" />
									</div>
									<span className="-mt-0.5 text-balance text-sm text-stone-500 sm:-mt-0.75 sm:text-base">
										{specialty}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="flex justify-center bg-primary px-6 py-12 sm:px-12 lg:py-24">
				<div className="flex w-full max-w-xl flex-col gap-12 xl:max-w-[1060.19px] xl:flex-row xl:items-end xl:justify-between">
					<div className="space-y-3 text-white">
						<h3 className="font-semibold text-xs uppercase tracking-widest sm:text-sm">
							Estamos aqui para si
						</h3>
						<h2 className="text-balance font-semibold text-3xl sm:text-4xl">
							Cuide do seu bem-estar com a confiança de estar em boas mãos
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
