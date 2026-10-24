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
		<>
			<section className="flex h-80 items-center justify-center bg-stone-950 p-6">
				<h1 className="text-center font-semibold text-3xl text-white sm:text-4xl">
					Marcar Consulta
				</h1>
			</section>
			<section className="flex justify-center px-6 py-12 sm:px-12 lg:py-24">
				<div className="flex max-w-xl flex-col gap-6 xl:w-full xl:max-w-293 xl:flex-row xl:gap-12">
					<div className="max-w-xl space-y-3 text-balance">
						<h3 className="font-semibold text-primary text-xs uppercase tracking-widest sm:text-sm">
							Agendamento
						</h3>
						<h2 className="font-semibold text-3xl sm:text-4xl">
							Vamos encontrar o cuidado certo para si.
						</h2>
						<p className="text-stone-500">
							Preencha o formulário e indique a especialidade que procura. Este
							pedido não substitui uma confirmação da clínica.
						</p>
					</div>
					<div className="min-w-1/2">
						<AppointmentForm />
					</div>
				</div>
			</section>
		</>
	);
}
