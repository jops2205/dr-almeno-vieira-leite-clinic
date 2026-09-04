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
			<div className="grid grid-cols-3 gap-6 px-80 pt-24">
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
			<div className="flex gap-12 px-80 pt-12 pb-24">
				<div className="w-1/2 space-y-6">
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
				<div className="w-1/2">
					<ClinicMap />
				</div>
			</div>
		</>
	);
}
