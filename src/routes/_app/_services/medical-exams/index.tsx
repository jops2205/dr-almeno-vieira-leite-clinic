import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceContent } from "../service-page";

export const Route = createFileRoute("/_app/_services/medical-exams/")({
	component: MedicalExams,
	head: () => ({ meta: [{ title: "Exames Médicos" }] }),
});
function MedicalExams() {
	return <ServicePage {...serviceContent.exams} variant="split" />;
}
