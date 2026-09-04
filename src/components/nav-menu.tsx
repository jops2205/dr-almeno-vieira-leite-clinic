import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Link, useLocation } from "@tanstack/react-router";
import { services } from "../consts/navigation";
import { cn } from "../lib/utils";

type NavItemProps = {
	to: string;
	text: string;
};

function NavItem({ to, text }: NavItemProps) {
	return (
		<DropdownMenuPrimitive.Item
			className="cursor-pointer text-sm outline-none hover:text-[#1C1917] data-highlighted:text-[#1C1917]"
			asChild>
			<Link
				to={to}
				activeProps={{ className: "text-[#1C1917]" }}
				inactiveProps={{ className: "text-stone-500" }}>
				{text}
			</Link>
		</DropdownMenuPrimitive.Item>
	);
}

export function NavMenu() {
	const location = useLocation();

	const isServiceRoute = services.some(({ to }) => to === location.pathname);

	return (
		<DropdownMenuPrimitive.Root>
			<DropdownMenuPrimitive.Trigger
				className={cn(
					"group cursor-pointer font-medium text-stone-500 outline-none transition-colors hover:text-[#1C1917] data-[state=open]:text-[#1C1917]",
					isServiceRoute && "active text-[#1C1917]",
				)}>
				Serviços
				<div className="h-0.5 w-0 bg-primary transition-all duration-300 group-[.active]:w-full" />
			</DropdownMenuPrimitive.Trigger>
			<DropdownMenuPrimitive.Portal>
				<DropdownMenuPrimitive.Content
					align="start"
					sideOffset={12}
					className="data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-6 outline-none data-[state=closed]:animate-out data-[state=open]:animate-in">
					{services.map(({ to, text }) => (
						<NavItem key={to} to={to} text={text} />
					))}
				</DropdownMenuPrimitive.Content>
			</DropdownMenuPrimitive.Portal>
		</DropdownMenuPrimitive.Root>
	);
}
