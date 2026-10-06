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
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">Marcar Consulta</h1>
			</div>
			<div className="flex flex-col items-stretch justify-center gap-10 px-4 py-16 sm:px-8 lg:flex-row lg:items-start lg:gap-12 lg:px-20 lg:py-24 2xl:px-80">
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
				<div className="w-full lg:min-w-1/2">
					<AppointmentForm />
				</div>
			</div>
		</div>
	);
}
