import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceContent } from "../service-page";

export const Route = createFileRoute("/_app/_services/nursing/")({
	component: Nursing,
	head: () => ({ meta: [{ title: "Enfermagem" }] }),
});
function Nursing() {
	return <ServicePage {...serviceContent.nursing} variant="timeline" />;
}
