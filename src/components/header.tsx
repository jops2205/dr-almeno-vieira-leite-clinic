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
		<header className="flex flex-col gap-6 bg-white px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-20 lg:py-6">
			<Logo />
			<nav>
				<ul className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 lg:h-full lg:gap-12">
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
