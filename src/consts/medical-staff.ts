import alvaroPratasBalhau from "../assets/medical-staff/dr-alvaro-pratas-balhau.jpg";
import danielMiranda from "../assets/medical-staff/dr-daniel-miranda.jpg";
import julioEsperanca from "../assets/medical-staff/dr-julio-esperanca.jpg";
import manuelLeite from "../assets/medical-staff/dr-manuel-leite.jpg";
import vitorLima from "../assets/medical-staff/dr-vitor-lima.jpg";
import anaSouzaMenezes from "../assets/medical-staff/dra-ana-souza-menezes.jpg";
import helenaCerqueira from "../assets/medical-staff/dra-helena-cerqueira.jpg";
import isabelPereira from "../assets/medical-staff/dra-isabel-pereira.jpg";
import joanaNogueira from "../assets/medical-staff/dra-joana-nogueira.jpg";
import joanaRocha from "../assets/medical-staff/dra-joana-rocha.jpg";
import julietaRamalho from "../assets/medical-staff/dra-julieta-ramalho.jpg";
import karlaMarin from "../assets/medical-staff/dra-karla-marin.jpg";
import luisaCardoso from "../assets/medical-staff/dra-luisa-cardoso.jpg";
import lurdesFerreira from "../assets/medical-staff/dra-lurdes-ferreira.jpg";
import marianaAntunes from "../assets/medical-staff/dra-mariana-antunes.jpg";
import marianaCastro from "../assets/medical-staff/dra-mariana-castro.jpg";
import patriciaBrito from "../assets/medical-staff/dra-patricia-brito.jpg";
import saraDiasVaranda from "../assets/medical-staff/dra-sara-dias-varanda.jpg";
import type { Specialty } from "./specialties";

export type Doctor = {
	name: string;
	specialties: Specialty[];
	src?: string;
};

export const medicalStaff: ReadonlyArray<Doctor> = [
	{
		name: "Dr. António Costeira",
		specialties: ["Cardiologia"],
	},
	{
		name: "Dr. Alvaro Pratas Balhau",
		specialties: ["Cirurgia Vascular"],
		src: alvaroPratasBalhau,
	},
	{
		name: "Dra. Helena Cerqueira",
		specialties: ["Dermatologia"],
		src: helenaCerqueira,
	},
	{
		name: "Dra. Patrícia Brito",
		specialties: ["Endocrinologia"],
		src: patriciaBrito,
	},
	{
		name: "Dra. Luísa Cardoso",
		specialties: ["Ginecologia", "Obstetrícia"],
		src: luisaCardoso,
	},
	{
		name: "Dra. Isabel Pereira",
		specialties: ["Medicina Geral e Familiar"],
		src: isabelPereira,
	},
	{
		name: "Dra. Karla Marin",
		specialties: ["Medicina Geral e Familiar"],
		src: karlaMarin,
	},
	{
		name: "Dr. Manuel Leite",
		specialties: ["Medicina Geral e Familiar"],
		src: manuelLeite,
	},
	{
		name: "Dr. Óscar de Barro",
		specialties: ["Medicina Geral e Familiar"],
	},
	{
		name: "Dra. Julieta Ramalho",
		specialties: ["Medicina Interna"],
		src: julietaRamalho,
	},
	{
		name: "Dra. Joana Rocha",
		specialties: ["Nefrologia"],
		src: joanaRocha,
	},
	{
		name: "Dra. Sara Dias Varanda",
		specialties: ["Neurologia"],
		src: saraDiasVaranda,
	},
	{
		name: "Dra. Josefina Serino",
		specialties: ["Oftalmologia"],
	},
	{
		name: "Dr. Vítor Lima",
		specialties: ["Oftalmologia"],
		src: vitorLima,
	},
	{
		name: "Dr. Nuno Vieira da Silva",
		specialties: ["Ortopedia"],
	},
	{
		name: "Dra. Ana Sousa Menezes",
		specialties: ["Otorrinolaringologia"],
		src: anaSouzaMenezes,
	},
	{
		name: "Dr. Daniel Miranda",
		specialties: ["Otorrinolaringologia"],
		src: danielMiranda,
	},
	{
		name: "Dr. Aníbal Rocha",
		specialties: ["Pediatria"],
	},
	{
		name: "Dra. Joana Vale Lages",
		specialties: ["Pneumologia"],
	},
	{
		name: "Dra. Lurdes Ferreira",
		specialties: ["Pneumologia"],
		src: lurdesFerreira,
	},
	{
		name: "Dr. Sertório Timotéo",
		specialties: ["Psiquiatria"],
	},
	{
		name: "Dr. Jorge Cabral Ribeiro",
		specialties: ["Urologia"],
	},
	{
		name: "Dra. Mariana Antunes",
		specialties: ["Nutrição"],
		src: marianaAntunes,
	},
	{
		name: "Dr. Júlio Esperança",
		specialties: ["Osteopatia"],
		src: julioEsperanca,
	},
	{
		name: "Dra. Mariana Castro",
		specialties: ["Podologia"],
		src: marianaCastro,
	},
	{
		name: "Dra. Sofia Ferreira",
		specialties: ["Podologia"],
	},
	{
		name: "Dra. Andreia Barbosa",
		specialties: ["Psicologia"],
	},
	{
		name: "Dra. Grace Kelly",
		specialties: ["Psicologia"],
	},
	{
		name: "Dra. Alexandra Mota",
		specialties: ["Psicomotricidade"],
	},
	{
		name: "Dra. Joana Nogueira",
		specialties: ["Terapia da Fala"],
		src: joanaNogueira,
	},
	{
		name: "Dra. Ana Rita Fernandes",
		specialties: ["Endodontia"],
	},
	{
		name: "Dra. Abílio Pinha de Almeida",
		specialties: ["Implantologia", "Periodontologia"],
	},
	{
		name: "Dra. Catarina Vieira Leite",
		specialties: ["Medicina Dentária Geral", "Odontopediatria"],
	},
	{
		name: "Dra. Ana Raquel Liz Almeida",
		specialties: ["Medicina Dentária Geral", "Ortodontia"],
	},
];
