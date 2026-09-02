import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceContent } from "../service-page";

export const Route = createFileRoute("/_app/_services/medical-specialties/")({
	component: MedicalSpecialties,
	head: () => ({ meta: [{ title: "Especialidades Médicas" }] }),
});
function MedicalSpecialties() {
	return <ServicePage {...serviceContent.medical} variant="cards" />;
}
