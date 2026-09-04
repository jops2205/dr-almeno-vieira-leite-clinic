type ContactDetailCardProps = {
	name: string;
	icon: React.ReactNode;
	details: string[];
};

export function ContactDetailCard({
	name,
	icon,
	details,
}: ContactDetailCardProps) {
	return (
		<div className="rounded-2xl border border-stone-200 bg-white p-6">
			<div className="flex items-center gap-3">
				<div className="rounded-full bg-primary/10 p-3 text-primary">
					{icon}
				</div>
				<h3 className="font-medium text-lg">{name}</h3>
			</div>
			<div className="mt-4 space-y-2">
				{details.map((detail, i) => (
					<p key={i} className="text-sm text-stone-500">
						{detail}
					</p>
				))}
			</div>
		</div>
	);
}
