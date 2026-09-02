import { Link } from "@tanstack/react-router";
import { navigation } from "../consts/navigation";
import { Button } from "./button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

function NavLink({ to, text }: { to: string; text: string }) {
	return (
		<Link
			to={to}
			activeProps={{ className: "active text-[#1C1917]" }}
			inactiveProps={{ className: "text-stone-500" }}
			className="group font-medium outline-none transition-colors hover:text-[#1C1917]">
			{text}
			<div className="h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full group-[.active]:w-full" />
		</Link>
	);
}

export function Header() {
	return (
		<header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-border border-b bg-white/95 px-4 py-4 backdrop-blur md:px-8 lg:px-12">
			<Logo />
			<nav>
				<ul className="flex flex-wrap items-center justify-end gap-4 text-sm md:gap-6 lg:gap-8">
					{navigation.slice(0, 1).map(({ to, text }) => (
						<li key={text}>
							<NavLink to={to} text={text} />
						</li>
					))}
					<li>
						<NavMenu />
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
		</header>
	);
}
