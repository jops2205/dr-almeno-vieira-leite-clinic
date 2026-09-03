import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceContent } from "../service-page";

export const Route = createFileRoute("/_app/_services/home-healthcare/")({
	component: HomeHealthcare,
	head: () => ({ meta: [{ title: "Serviço ao Domicílio" }] }),
});
function HomeHealthcare() {
	return <ServicePage {...serviceContent.home} variant="featured" />;
}
