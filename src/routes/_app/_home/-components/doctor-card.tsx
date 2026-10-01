import type { Specialty } from "#/consts/specialties";

type DoctorCardProps = {
	name: string;
	specialty: Specialty;
	src?: string;
	alt?: string;
};

export function DoctorCard({ name, specialty, src, alt }: DoctorCardProps) {
	return (
		<div className="space-y-3">
			<img src={src} alt={alt} className="rounded-2xl" />
			<div>
				<h3 className="font-medium">{name}</h3>
				<span className="text-sm text-stone-500">{specialty}</span>
			</div>
		</div>
	);
}
