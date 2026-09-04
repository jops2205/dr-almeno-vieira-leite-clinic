import { FaUserDoctor } from "react-icons/fa6";
import type { Specialty } from "#/consts/specialties";

type DoctorCardProps = {
	name: string;
	specialties: Specialty[];
	src?: string;
	alt?: string;
};

export function DoctorCard({ name, specialties, src, alt }: DoctorCardProps) {
	return (
		<div className="group flex h-fit overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1">
			{!src && (
				<div className="grid h-52.5 w-36 place-items-center rounded-xs bg-primary/10 transition-transform duration-500 group-hover:scale-105">
					<FaUserDoctor className="size-20 text-primary" />
				</div>
			)}
			{src && alt && (
				<img
					src={src}
					alt={alt}
					className="h-52.5 w-36 rounded-xs object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			)}
			<div className="flex flex-col gap-1.5 p-6">
				<span className="font-medium text-xl">{name}</span>
				<div className="space-y-0.5">
					{specialties.map((specialty) => (
						<span key={specialty} className="block text-sm text-stone-500">
							{specialty}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
