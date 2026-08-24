import advanceCare from "../assets/agreements/advance-care-logo.png";
import allianz from "../assets/agreements/allianz-logo.svg";
import dentinet from "../assets/agreements/dentinet-logo.png";
import futureHealthcare from "../assets/agreements/future-healthcare-logo.png";
import medicare from "../assets/agreements/medicare-logo.svg";
import medisDental from "../assets/agreements/medis-dental-logo.png";
import medis from "../assets/agreements/medis-logo.svg";
import multicare from "../assets/agreements/multicare-logo.svg";
import rnaMedical from "../assets/agreements/rna-medical-logo.png";
import sns from "../assets/agreements/sns-logo.png";
import sscgd from "../assets/agreements/sscgd-logo.png";
import volunteerFirefighters from "../assets/agreements/volunteer-firefighters-logo.png";

export const agreements = [
	{
		name: "RNA Medical",
		src: rnaMedical,
	},
	{
		name: "Médis",
		src: medis,
	},
	{
		name: "Médis Dental",
		src: medisDental,
	},
	{
		name: "Dentinet",
		src: dentinet,
	},
	{
		name: "Medicare",
		src: medicare,
	},
	{
		name: "Advance Care",
		src: advanceCare,
	},
	{
		name: "Multicare",
		src: multicare,
	},
	{
		name: "Allianz",
		src: allianz,
	},
	{
		name: "Future Healthcare",
		src: futureHealthcare,
	},
	{
		name: "Serviços Sociais da Caixa Geral de Depósitos",
		src: sscgd,
	},
	{
		name: "Bombeiros Voluntários",
		src: volunteerFirefighters,
	},
	{
		name: "Cheque Dentista",
		src: sns,
	},
] as const;
