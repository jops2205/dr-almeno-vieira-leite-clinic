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
			<div className="flex items-start justify-center gap-12 px-80 py-24">
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
				<div className="min-w-1/2">
					<AppointmentForm />
				</div>
			</div>
		</div>
	);
}
