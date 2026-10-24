import alvaroPratasBalhau from "../assets/medical-staff/dr-alvaro-pratas-balhau.jpg";
import danielMiranda from "../assets/medical-staff/dr-daniel-miranda.jpg";
import julioEsperanca from "../assets/medical-staff/dr-julio-esperanca.jpg";
import manuelLeite from "../assets/medical-staff/dr-manuel-leite.jpg";
import vitorLima from "../assets/medical-staff/dr-vitor-lima.jpg";
import alexandraMota from "../assets/medical-staff/dra-alexandra-mota.jpg";
import anaSouzaMenezes from "../assets/medical-staff/dra-ana-souza-menezes.jpg";
import graceKelly from "../assets/medical-staff/dra-grace-kelly.png";
import helenaCerqueira from "../assets/medical-staff/dra-helena-cerqueira.jpg";
import isabelPereira from "../assets/medical-staff/dra-isabel-pereira.jpg";
import joanaNogueira from "../assets/medical-staff/dra-joana-nogueira.jpg";
import joanaRocha from "../assets/medical-staff/dra-joana-rocha.jpg";
import julietaRamalho from "../assets/medical-staff/dra-julieta-ramalho.jpg";
import karlaMarin from "../assets/medical-staff/dra-karla-marin.jpg";
import luisaCardoso from "../assets/medical-staff/dra-luisa-cardoso.png";
import lurdesFerreira from "../assets/medical-staff/dra-lurdes-ferreira.png";
import marianaAntunes from "../assets/medical-staff/dra-mariana-antunes.jpg";
import marianaCastro from "../assets/medical-staff/dra-mariana-castro.jpg";
import patriciaBrito from "../assets/medical-staff/dra-patricia-brito.jpg";
import saraDiasVaranda from "../assets/medical-staff/dra-sara-dias-varanda.png";
import type { Specialty } from "./specialties";

type Category = "medical" | "health" | "dentistry";

export type Doctor = {
	name: string;
	specialties: Specialty[];
	category: Category;
	src?: string;
};

export const medicalStaff: ReadonlyArray<Doctor> = [
	{
		name: "Dr. António Costeira",
		specialties: ["Cardiologia"],
		category: "medical",
	},
	{
		name: "Dr. Alvaro Pratas Balhau",
		specialties: ["Cirurgia Vascular"],
		category: "medical",
		src: alvaroPratasBalhau,
	},
	{
		name: "Dra. Helena Cerqueira",
		specialties: ["Dermatologia"],
		category: "medical",
		src: helenaCerqueira,
	},
	{
		name: "Dra. Patrícia Brito",
		specialties: ["Endocrinologia"],
		category: "medical",
		src: patriciaBrito,
	},
	{
		name: "Dra. Luísa Cardoso",
		specialties: ["Ginecologia", "Obstetrícia"],
		category: "medical",
		src: luisaCardoso,
	},
	{
		name: "Dra. Isabel Pereira",
		specialties: ["Medicina Geral e Familiar"],
		category: "medical",
		src: isabelPereira,
	},
	{
		name: "Dra. Karla Marin",
		specialties: ["Medicina Geral e Familiar"],
		category: "medical",
		src: karlaMarin,
	},
	{
		name: "Dr. Manuel Leite",
		specialties: ["Medicina Geral e Familiar"],
		category: "medical",
		src: manuelLeite,
	},
	{
		name: "Dr. Óscar de Barro",
		specialties: ["Medicina Geral e Familiar"],
		category: "medical",
	},
	{
		name: "Dra. Julieta Ramalho",
		specialties: ["Medicina Interna"],
		category: "medical",
		src: julietaRamalho,
	},
	{
		name: "Dra. Joana Rocha",
		specialties: ["Nefrologia"],
		category: "medical",
		src: joanaRocha,
	},
	{
		name: "Dra. Sara Dias Varanda",
		specialties: ["Neurologia"],
		category: "medical",
		src: saraDiasVaranda,
	},
	{
		name: "Dra. Josefina Serino",
		specialties: ["Oftalmologia"],
		category: "medical",
	},
	{
		name: "Dr. Vítor Lima",
		specialties: ["Oftalmologia"],
		category: "medical",
		src: vitorLima,
	},
	{
		name: "Dr. Nuno Vieira da Silva",
		specialties: ["Ortopedia"],
		category: "medical",
	},
	{
		name: "Dra. Ana Sousa Menezes",
		specialties: ["Otorrinolaringologia"],
		category: "medical",
		src: anaSouzaMenezes,
	},
	{
		name: "Dr. Daniel Miranda",
		specialties: ["Otorrinolaringologia"],
		category: "medical",
		src: danielMiranda,
	},
	{
		name: "Dr. Aníbal Rocha",
		specialties: ["Pediatria"],
		category: "medical",
	},
	{
		name: "Dra. Joana Vale Lages",
		specialties: ["Pneumologia"],
		category: "medical",
	},
	{
		name: "Dra. Lurdes Ferreira",
		specialties: ["Pneumologia"],
		category: "medical",
		src: lurdesFerreira,
	},
	{
		name: "Dr. Sertório Timotéo",
		specialties: ["Psiquiatria"],
		category: "medical",
	},
	{
		name: "Dr. Jorge Cabral Ribeiro",
		specialties: ["Urologia"],
		category: "medical",
	},
	{
		name: "Dra. Mariana Antunes",
		specialties: ["Nutrição"],
		category: "health",
		src: marianaAntunes,
	},
	{
		name: "Dr. Júlio Esperança",
		specialties: ["Osteopatia"],
		category: "health",
		src: julioEsperanca,
	},
	{
		name: "Dra. Mariana Castro",
		specialties: ["Podologia"],
		category: "health",
		src: marianaCastro,
	},
	{
		name: "Dra. Sofia Ferreira",
		specialties: ["Podologia"],
		category: "health",
	},
	{
		name: "Dra. Andreia Barbosa",
		specialties: ["Psicologia"],
		category: "health",
	},
	{
		name: "Dra. Grace Kelly",
		specialties: ["Psicologia"],
		category: "health",
		src: graceKelly,
	},
	{
		name: "Dra. Alexandra Mota",
		specialties: ["Psicomotricidade"],
		category: "health",
		src: alexandraMota,
	},
	{
		name: "Dra. Joana Nogueira",
		specialties: ["Terapia da Fala"],
		category: "health",
		src: joanaNogueira,
	},
	{
		name: "Dra. Ana Rita Fernandes",
		specialties: ["Endodontia"],
		category: "dentistry",
	},
	{
		name: "Dra. Abílio Pinha de Almeida",
		specialties: ["Implantologia", "Periodontologia"],
		category: "dentistry",
	},
	{
		name: "Dra. Catarina Vieira Leite",
		specialties: ["Medicina Dentária Geral", "Odontopediatria"],
		category: "dentistry",
	},
	{
		name: "Dra. Ana Raquel Liz Almeida",
		specialties: ["Medicina Dentária Geral", "Ortodontia"],
		category: "dentistry",
	},
];
