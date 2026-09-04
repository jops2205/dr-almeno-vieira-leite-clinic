import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceContent } from "../service-page";

export const Route = createFileRoute("/_app/_services/dentistry/")({
	component: Dentistry,
	head: () => ({ meta: [{ title: "Medicina Dentária" }] }),
});
function Dentistry() {
	return (
		<ServicePage
			{...serviceContent.dentistry}
			showClinicalStaffLink
			variant="featured"
		/>
	);
}
