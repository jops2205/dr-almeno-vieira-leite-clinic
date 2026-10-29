import { Link } from "@tanstack/react-router";
import {
	FaClock,
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaMapPin,
	FaPhone,
} from "react-icons/fa6";
import { navigation, services } from "../consts/navigation";
import { Logo } from "./logo";

export function Footer() {
	return (
		<footer>
			<div className="flex justify-center bg-white px-6 py-12 sm:px-12 lg:px-24">
				<div className="flex flex-col gap-12 2xl:flex-row 2xl:gap-24">
					<Logo className="h-fit w-44 sm:w-48 2xl:w-48" />
					<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-4">
						<div className="space-y-12 2xl:space-y-6">
							<div>
								<h3 className="mb-1.5 font-medium">Menu</h3>
								<nav>
									<ul className="space-y-1">
										{navigation.map(({ to, text }) => (
											<li key={to} className="h-5">
												<Link
													to={to}
													className="font-medium text-sm text-stone-500 outline-none transition-colors hover:text-primary">
													{text}
												</Link>
											</li>
										))}
									</ul>
								</nav>
							</div>
							<div>
								<h3 className="mb-1.5 font-medium">Links Úteis</h3>
								<nav className="mb-1">
									<ul className="space-y-1">
										<li className="h-5">
											<Link
												to="/privacy-policy"
												className="font-medium text-sm text-stone-500 outline-none transition-colors hover:text-primary">
												Política de Privacidade
											</Link>
										</li>
									</ul>
								</nav>
								<div className="h-5">
									<a
										target="_blank"
										rel="noopener"
										href="https://www.livroreclamacoes.pt/Inicio/"
										className="font-medium text-sm text-stone-500 outline-none transition-colors hover:text-primary">
										Livro de Reclamações
									</a>
								</div>
							</div>
						</div>
						<div>
							<h3 className="mb-1.5 font-medium">Serviços</h3>
							<nav>
								<ul className="space-y-1">
									{services.map(({ to, text }) => (
										<li key={to} className="h-5">
											<Link
												to={to}
												className="font-medium text-sm text-stone-500 outline-none transition-colors hover:text-primary">
												{text}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</div>
						<div className="space-y-12 2xl:space-y-6">
							<div>
								<h3 className="mb-1.5 font-medium">Horário</h3>
								<div className="mb-1 flex items-start gap-1.5">
									<FaClock className="min-h-4 min-w-4 text-primary" />
									<span className="-mt-0.5 text-sm text-stone-500">
										Segunda a Sexta - 08:00 às 20:00
									</span>
								</div>
								<div className="flex items-start gap-1.5">
									<FaClock className="min-h-4 min-w-4 text-primary" />
									<span className="-mt-0.5 text-sm text-stone-500">
										Sábado - 08:00 às 13:00
									</span>
								</div>
							</div>
							<div>
								<h3 className="mb-1.5 font-medium">Morada</h3>
								<div className="mb-1 flex items-start gap-1.5">
									<FaMapPin className="min-h-4 min-w-4 text-primary" />
									<span className="-mt-0.5 max-w-90 text-sm text-stone-500">
										Av. Prof. Carlos Teixeira, Edifício Olmar II, n.º 42,
										4850-524 Vieira do Minho
									</span>
								</div>
							</div>
						</div>
						<div className="space-y-12 2xl:space-y-6">
							<div>
								<h3 className="mb-1.5 font-medium">Contactos</h3>
								<div className="mb-1 flex items-start gap-1.5">
									<FaPhone className="min-h-4 min-w-4 text-primary" />
									<span className="-mt-0.5 text-sm text-stone-500">
										+351 927 500 389
									</span>
								</div>
								<div className="mb-1 flex items-start gap-1.5">
									<FaPhone className="min-h-4 min-w-4 text-primary" />
									<span className="-mt-0.5 text-sm text-stone-500">
										+351 253 648 685
									</span>
								</div>
								<div className="flex items-center gap-1.5">
									<FaEnvelope className="min-h-4 min-w-4 text-primary" />
									<span className="text-sm text-stone-500">
										geral@clinicadralmenoleite.pt
									</span>
								</div>
							</div>
							<div>
								<h3 className="mb-1.5 font-medium">Redes Sociais</h3>
								<div className="mb-1 flex items-center gap-1.5">
									<FaFacebook className="min-h-4 min-w-4 text-primary" />
									<a
										target="_blank"
										rel="noopener"
										href="https://www.facebook.com/p/Clinica-Dr-Almeno-Vieira-Leite-100064116901453/"
										className="font-medium text-sm text-stone-500 outline-none transition-colors hover:text-primary">
										Facebook
									</a>
								</div>
								<div className="mb-1 flex items-center gap-1.5">
									<FaInstagram className="min-h-4 min-w-4 text-primary" />
									<a
										target="_blank"
										rel="noopener"
										href="https://www.instagram.com/clinica_dralmenovieiraleite/"
										className="font-medium text-sm text-stone-500 outline-none transition-colors hover:text-primary">
										Instagram
									</a>
								</div>
								<div className="mb-1 flex items-center gap-1.5">
									<FaLinkedin className="min-h-4 min-w-4 text-primary" />
									<a
										target="_blank"
										rel="noopener"
										href="https://www.linkedin.com/company/clinicadralmenoleite/"
										className="font-medium text-sm text-stone-500 outline-none transition-colors hover:text-primary">
										LinkedIn
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center bg-primary px-6 py-3 text-white sm:px-12 lg:px-24">
				<p className="text-balance text-center text-xs sm:text-sm">
					© {new Date().getFullYear().toString()} Clínica Dr. Almeno Vieira
					Leite. Todos os direitos reservados
				</p>
			</div>
		</footer>
	);
}
