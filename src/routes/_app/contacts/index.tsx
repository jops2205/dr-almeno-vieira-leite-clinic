import { createFileRoute } from "@tanstack/react-router";
import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa6";
import { ClinicMap } from "./-components/clinic-map";
import { ContactDetailCard } from "./-components/contact-detail-card";
import { ContactForm } from "./-components/contact-form";

export const Route = createFileRoute("/_app/contacts/")({
	component: Contacts,
	head: () => ({
		meta: [
			{
				title: "Contactos",
			},
		],
	}),
});

function Contacts() {
	return (
		<>
			<section className="flex h-80 items-center justify-center bg-stone-950 p-6">
				<h1 className="font-semibold text-3xl text-white sm:text-4xl">
					Contactos
				</h1>
			</section>
			<section className="flex justify-center px-6 pt-12 pb-6 sm:px-12 lg:pt-24 lg:pb-6 xl:pb-12">
				<div className="grid w-full max-w-xl grid-cols-1 gap-6 xl:max-w-360 xl:grid-cols-3 xl:gap-12">
					<ContactDetailCard
						name="Telefone"
						icon={<FaPhone />}
						details={["+351 927 500 389", "+351 253 648 685"]}
					/>
					<ContactDetailCard
						name="E-mail"
						icon={<FaEnvelope />}
						details={["geral@clinicadralmenoleite.pt"]}
					/>
					<ContactDetailCard
						name="Horário"
						icon={<FaClock />}
						details={[
							"Segunda a Sexta - 08:00 às 20:00",
							"Sábado - 08:00 às 13:00",
						]}
					/>
				</div>
			</section>
			<section className="flex justify-center px-6 pt-6 pb-12 sm:px-12 lg:pt-6 lg:pb-24 xl:pt-12">
				<div className="flex w-full max-w-xl flex-col gap-12 xl:max-w-360 xl:flex-row xl:gap-24">
					<div className="space-y-6 xl:w-1/2">
						<div className="space-y-3 text-balance">
							<h3 className="font-semibold text-primary text-xs uppercase tracking-widest sm:text-sm">
								Mensagem Direta
							</h3>
							<h2 className="font-semibold text-3xl sm:text-4xl">
								Como podemos ajudar?
							</h2>
							<p className="max-w-96 text-sm text-stone-500 sm:text-base">
								Preencha o formulário e a nossa equipa entrará em contacto
								consigo assim que possível.
							</p>
						</div>
						<ContactForm />
					</div>
					<div className="h-89.5 xl:h-154 xl:w-1/2">
						<ClinicMap />
					</div>
				</div>
			</section>
		</>
	);
}
