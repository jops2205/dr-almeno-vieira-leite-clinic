import { createFileRoute } from "@tanstack/react-router";
import { AppointmentForm } from "./-components/appointment-form";

export const Route = createFileRoute("/_app/appointments/")({
	component: Appointments,
	head: () => ({
		meta: [
			{
				title: "Marcar Consulta",
			},
		],
	}),
});

function Appointments() {
	return (
		<div>
			<div className="page-hero">
				<div className="page-shell">
					<p className="mb-3 font-semibold text-primary text-sm uppercase tracking-widest">
						Agendamento
					</p>
					<h1 className="font-semibold text-4xl text-white md:text-5xl">
						Marcar Consulta
					</h1>
					<p className="mt-4 max-w-xl text-white/70">
						Dê o primeiro passo para encontrar o cuidado certo para si.
					</p>
				</div>
			</div>
			<div className="page-shell flex flex-col items-start gap-10 py-12 md:py-20 lg:flex-row">
				<div className="flex w-full flex-col gap-6 lg:w-2/5">
					<div className="space-y-3">
						<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
							Agendamento
						</h3>
						<h2 className="max-w-96 font-semibold text-4xl">
							Vamos encontrar o cuidado certo para si.
						</h2>
						<p className="max-w-96 text-stone-500">
							Preencha o formulário e indique a especialidade que procura. Este
							pedido não substitui uma confirmação da clínica.
						</p>
					</div>
					<div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
						{[
							"Resposta da equipa",
							"Escolha acompanhada",
							"Pedido sem compromisso",
						].map((item) => (
							<div
								key={item}
								className="surface flex items-center gap-3 p-4 text-sm">
								<span
									className="size-2 rounded-full bg-primary"
									aria-hidden="true"
								/>
								{item}
							</div>
						))}
					</div>
				</div>
				<div className="w-full lg:min-w-1/2">
					<AppointmentForm />
				</div>
			</div>
		</div>
	);
}
