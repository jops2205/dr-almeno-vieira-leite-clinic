import { FaCheck } from "react-icons/fa6";
import { laboratoryAgreements } from "#/consts/clinical-laboratory";

export function ServiceAndAgreementsSection() {
	return (
		<section className="flex justify-center px-6 pt-12 pb-6 sm:px-12 lg:pt-24 lg:pb-12">
			<div className="flex flex-col gap-12 xl:flex-row xl:gap-24">
				<div className="max-w-xl space-y-3">
					<h3 className="font-semibold text-primary text-xs uppercase tracking-widest sm:text-sm">
						O serviço
					</h3>
					<h2 className="text-balance font-semibold text-3xl sm:text-4xl">
						Tudo o que precisa, mais perto de si
					</h2>
					<div className="space-y-1.5">
						<p className="text-balance text-sm text-stone-500 sm:text-base">
							A nossa equipa assegura um serviço de análises clínicas simples,
							cuidado e acessível, em parceria com o Grupo UNILABS.
						</p>
						<p className="text-balance text-sm text-stone-500 sm:text-base">
							Para maior comodidade, pode também optar pela colheita ao
							domicílio, mediante marcação prévia.
						</p>
					</div>
				</div>
				<div className="rounded-2xl bg-primary/10 p-6">
					<h3 className="text-balance font-semibold text-primary text-xs uppercase tracking-widest sm:text-sm">
						Acordos e convenções
					</h3>
					<h2 className="mt-3 text-balance font-semibold text-3xl sm:text-4xl">
						Cuidados acessíveis
					</h2>
					<div className="mt-6 flex flex-col gap-2">
						{laboratoryAgreements.map((agreement) => (
							<div key={agreement} className="flex items-start gap-2">
								<div className="w-fit rounded-full bg-primary p-1 text-white">
									<FaCheck className="size-2 sm:size-2.5" />
								</div>
								<span className="-mt-0.5 text-balance text-sm text-stone-500 sm:-mt-0.75 sm:text-base">
									{agreement}
								</span>
							</div>
						))}
					</div>
					<p className="mt-6 text-balance text-primary text-xs sm:text-sm">
						Análises particulares de acordo com a tabela de preços em vigor.
					</p>
				</div>
			</div>
		</section>
	);
}
