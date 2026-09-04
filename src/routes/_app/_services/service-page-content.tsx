import { Link } from "@tanstack/react-router";
import { FaArrowRight, FaCircleCheck } from "react-icons/fa6";

type ServicePageContentProps = {
	eyebrow: string;
	title: string;
	description: string;
	items: readonly string[];
	itemLabel: string;
	intro: string;
};

export function ServicePageContent({
	eyebrow,
	title,
	description,
	items,
	itemLabel,
	intro,
}: ServicePageContentProps) {
	return (
		<>
			<section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
					<div className="space-y-4 lg:sticky lg:top-8">
						<p className="font-semibold text-primary text-sm uppercase tracking-widest">
							{eyebrow}
						</p>
						<h2 className="max-w-2xl font-semibold text-4xl sm:text-5xl">
							{title}
						</h2>
						<p className="max-w-xl text-base text-stone-500 leading-relaxed">
							{description}
						</p>
					</div>
					<div className="grid gap-6">
						<div className="rounded-2xl bg-primary/10 p-8 text-primary sm:p-10">
							<p className="font-medium text-lg leading-relaxed">{intro}</p>
							<Link
								to="/appointments"
								className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground text-sm transition-transform hover:-translate-y-0.5">
								Marcar consulta <FaArrowRight aria-hidden="true" />
							</Link>
						</div>
						<div className="rounded-2xl border border-stone-200 bg-white p-8 sm:p-10">
							<h3 className="font-semibold text-2xl">{itemLabel}</h3>
							<ul className="mt-6 grid gap-4 sm:grid-cols-2">
								{items.map((item) => (
									<li
										key={item}
										className="flex items-start gap-3 text-stone-600">
										<FaCircleCheck
											className="mt-1 shrink-0 text-primary"
											aria-hidden="true"
										/>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="border-stone-200 border-t bg-stone-50">
				<div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-8">
					<div>
						<p className="font-semibold text-primary text-sm uppercase tracking-widest">
							Estamos aqui para si
						</p>
						<h2 className="mt-2 font-semibold text-3xl">
							Cuide da sua saúde com confiança.
						</h2>
					</div>
					<Link
						to="/contacts"
						className="font-semibold text-primary text-sm underline underline-offset-4">
						Fale connosco
					</Link>
				</div>
			</section>
		</>
	);
}
