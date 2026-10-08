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
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">Contactos</h1>
			</div>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-20 xl:px-80 pt-24">
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
			<div className="flex flex-col gap-10 px-4 pt-12 pb-16 sm:px-6 md:gap-12 lg:flex-row lg:px-20 lg:pb-24 xl:px-80">
				<div className="w-full space-y-6 lg:w-1/2">
					<div className="space-y-3">
						<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
							Mensagem Direta
						</h3>
						<h2 className="font-semibold text-4xl">Como podemos ajudar?</h2>
						<p className="max-w-96 text-stone-500">
							Preencha o formulário e a nossa equipa entrará em contacto consigo
							assim que possível.
						</p>
					</div>
					<ContactForm />
				</div>
				<div className="w-full lg:w-1/2">
					<ClinicMap />
				</div>
			</div>
		</>
	);
}
