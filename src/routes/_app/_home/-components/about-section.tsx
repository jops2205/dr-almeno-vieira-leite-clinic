export function AboutSection() {
	return (
		<section className="flex justify-center bg-primary/10 px-6 py-12 sm:px-12 lg:py-24">
			<div className="flex max-w-xl flex-col gap-6 xl:w-full xl:max-w-293">
				<div className="space-y-3">
					<h3 className="font-semibold text-primary text-xs uppercase tracking-widest sm:text-sm">
						Ao seu lado desde 1994
					</h3>
					<h2 className="text-balance font-semibold text-3xl sm:text-4xl">
						Cuidamos da sua saúde há mais de 30 anos
					</h2>
				</div>
				<div className="max-w-4xl space-y-3 text-balance text-sm sm:text-base">
					<p className="text-primary">
						Fundada em 1994, a Clínica kDr. Almeno Vieira Leite presta cuidados
						de saúde especializados em regime de ambulatório no concelho de
						Vieira do Minho, oferecendo um vasto conjunto de serviços, incluindo
						consultas de especialidade, análises clínicas, exames médicos e
						cuidados de enfermagem.
					</p>
					<p className="text-primary">
						A Clínica disponibiliza ainda um vasto leque de cuidados
						domiciliários, todos os dias da semana, proporcionando um maior
						conforto e bem-estar aos seus utentes e familiares.
					</p>
					<p className="text-primary">
						A experiência desenvolvida no decorrer de mais de 30 anos, permitiu
						elevar o seu nome como uma referência local no sector da saúde.
					</p>
				</div>
			</div>
		</section>
	);
}
