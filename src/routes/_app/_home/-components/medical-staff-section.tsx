import { Link } from "@tanstack/react-router";
import { Button } from "#/components/button";
import { medicalStaff } from "#/consts/medical-staff";
import { getRandomDoctors } from "#/funcs/get-random-doctors";
import { DoctorCard } from "./doctor-card";

export function MedicalStaffSection() {
	const randomDoctors = getRandomDoctors(medicalStaff);

	return (
		<section className="flex justify-center bg-stone-100 px-6 py-12 sm:px-12 lg:py-24">
			<div className="flex max-w-xl flex-col xl:w-full xl:max-w-293">
				<div className="flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
					<div className="space-y-3 text-balance">
						<h3 className="font-semibold text-primary text-xs uppercase tracking-widest sm:text-sm">
							Corpo Clínico
						</h3>
						<h2 className="font-semibold text-3xl sm:text-4xl">
							Conheça a nossa equipa
						</h2>
						<p className="max-w-xl text-sm text-stone-500 sm:text-base">
							Profissionais experientes e dedicados, unidos pelo conhecimento,
							pela excelência e por uma forma próxima e humana de cuidar.
						</p>
					</div>
					<Link to="/medical-staff" className="outline-none">
						<Button>Ver Corpo Clínico</Button>
					</Link>
				</div>
				<div className="mt-9 grid grid-cols-2 gap-6 xl:grid-cols-4">
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
			</div>
		</section>
	);
}
