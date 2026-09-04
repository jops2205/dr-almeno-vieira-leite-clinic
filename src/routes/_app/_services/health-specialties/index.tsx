import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceContent } from "../service-page";

export const Route = createFileRoute("/_app/_services/health-specialties/")({
	component: HealthSpecialties,
	head: () => ({ meta: [{ title: "Especialidades Não Médicas" }] }),
});
function HealthSpecialties() {
	return (
		<ServicePage
			{...serviceContent.health}
			showClinicalStaffLink
			variant="split"
		/>
	);
}
