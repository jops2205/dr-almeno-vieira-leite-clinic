import { FaClock, FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa6";

export const contacts = [
	{
		title: "Telefone",
		icon: <FaPhone className="" />,
		items: ["927 500 389", "253 648 685"],
	},
	{
		title: "E-mail",
		icon: <FaEnvelope className="" />,
		items: ["geral@clinicadralmenoleite.pt"],
	},
	{
		title: "Horário",
		icon: <FaClock className="" />,
		items: ["Segunda a Sexta - 08:00 às 20:00", "Sábado - 08:00 às 13:00"],
	},
	{
		title: "Morada",
		icon: <FaMapPin className="" />,
		items: [
			"Av. Prof. Carlos Teixeira, Edifício Olmar II, n.º 42, 4850-524 Vieira do Minho",
		],
	},
] as const;
