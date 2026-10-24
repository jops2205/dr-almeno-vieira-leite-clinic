import { Link } from "@tanstack/react-router";
import { navigation } from "../consts/navigation";
import { Button } from "./button";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { ServiceMenu } from "./service-menu";

function NavLink({ to, text }: { to: string; text: string }) {
	return (
		<Link
			to={to}
			activeProps={{ className: "active text-[#1C1917]" }}
			inactiveProps={{ className: "text-stone-500" }}
			className="group font-medium text-sm uppercase outline-none transition-colors hover:text-[#1C1917] 2xl:text-base">
			{text}
			<div className="h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full group-[.active]:w-full" />
		</Link>
	);
}

export function Header() {
	return (
		<header className="flex items-center justify-between bg-white px-6 py-6 sm:px-12 lg:px-24">
			<Logo />
			<nav className="hidden xl:block">
				<ul className="flex h-full items-center gap-12 2xl:gap-16">
					{navigation.slice(0, 1).map(({ to, text }) => (
						<li key={text}>
							<NavLink to={to} text={text} />
						</li>
					))}
					<li className="flex items-center">
						<ServiceMenu />
					</li>
					{navigation.slice(1, 4).map(({ to, text }) => (
						<li key={text}>
							<NavLink to={to} text={text} />
						</li>
					))}
					<li>
						<Link to="/appointments" className="outline-none">
							<Button>Marcar Consulta</Button>
						</Link>
					</li>
				</ul>
			</nav>
			<MobileMenu />
		</header>
	);
}
