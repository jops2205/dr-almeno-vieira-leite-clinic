export const medicalSpecialties = [
	"Cardiologia",
	"Cirurgia Vascular",
	"Dermatologia",
	"Endocrinologia",
	"Ginecologia",
	"Medicina Geral e Familiar",
	"Medicina Interna",
	"Nefrologia",
	"Neurologia",
	"Obstetrícia",
	"Oftalmologia",
	"Ortopedia",
	"Otorrinolaringologia",
	"Pediatria",
	"Pneumologia",
	"Psiquiatria",
	"Urologia",
] as const;

export const healthSpecialties = [
	"Nutrição",
	"Osteopatia",
	"Podologia",
	"Psicologia",
	"Psicomotricidade",
	"Terapia da Fala",
] as const;

export const dentistrySpecialty = ["Medicina Dentária Geral"] as const;

export const dentistrySpecialties = [
	"Endodontia",
	"Implantologia",
	"Odontopediatria",
	"Ortodontia",
	"Periodontologia",
] as const;

export const specialties = [
	...medicalSpecialties,
	...healthSpecialties,
	...dentistrySpecialty,
	...dentistrySpecialties,
] as const;

export type Specialty = (typeof specialties)[number];
