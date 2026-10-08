import { Link } from "@tanstack/react-router";
import { Button } from "#/components/button";
import { medicalStaff } from "#/consts/medical-staff";
import { getRandomDoctors } from "#/funcs/get-random-doctors";
import { DoctorCard } from "./doctor-card";

export function MedicalStaffSection() {
	const randomDoctors = getRandomDoctors(medicalStaff);

	return (
		<section className="bg-stone-100 px-4 py-16 sm:px-6 lg:px-20 lg:py-24 xl:px-80">
			<div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
				<div className="space-y-3">
					<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
						Corpo Clínico
					</h3>
					<h2 className="max-w-md font-semibold text-4xl">
						Conheça a nossa equipa
					</h2>
					<p className="max-w-xl text-balance text-stone-500">
						Profissionais experientes e dedicados, unidos pelo conhecimento,
						pela excelência e por uma forma próxima e humana de cuidar.
					</p>
				</div>
				<Link to="/medical-staff" className="outline-none">
					<Button>Ver Corpo Clínico</Button>
				</Link>
			</div>
			<div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{randomDoctors.map(({ name, specialties, src }) => (
					<DoctorCard
						key={name}
						name={name}
						specialty={specialties[0]}
						src={src}
						alt={name}
					/>
				))}
			</div>
		</section>
	);
}
