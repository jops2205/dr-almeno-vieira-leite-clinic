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
			<div className="text-balance">
				<h3 className="font-medium text-sm sm:text-base">{name}</h3>
				<span className="text-stone-500 text-xs uppercase sm:text-sm">
					{specialty}
				</span>
			</div>
		</div>
	);
}
