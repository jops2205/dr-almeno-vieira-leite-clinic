import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Link } from "@tanstack/react-router";
import { FaBars } from "react-icons/fa6";
import { navigation } from "#/consts/navigation";
import { cn } from "#/lib/utils";
import { Button } from "./button";
import { ServiceMenu } from "./service-menu";

type MobileMenuItemProps = {
	to: string;
	text: string;
};

function MobileMenuItem({ to, text }: MobileMenuItemProps) {
	return (
		<DropdownMenuPrimitive.Item onSelect={(e) => e.preventDefault()} asChild>
			<Link
				to={to}
				activeProps={{ className: "active text-[#1C1917]" }}
				inactiveProps={{ className: "text-stone-500" }}
				className="group w-fit font-medium text-sm uppercase outline-none transition-colors hover:text-[#1C1917] sm:text-base">
				{text}
				<div className="h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full group-[.active]:w-full" />
			</Link>
		</DropdownMenuPrimitive.Item>
	);
}

export function MobileMenu() {
	return (
		<div className="flex items-center xl:hidden">
			<DropdownMenuPrimitive.Root>
				<DropdownMenuPrimitive.Trigger
					className={cn(
						"cursor-pointer text-stone-500 outline-none transition-colors hover:text-[#1C1917] data-[state=open]:text-[#1C1917]",
					)}>
					<FaBars className="size-6 sm:size-7" />
				</DropdownMenuPrimitive.Trigger>
				<DropdownMenuPrimitive.Portal>
					<DropdownMenuPrimitive.Content
						align="end"
						sideOffset={12}
						className="data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 flex w-[239.97px] flex-col gap-6 rounded-2xl border border-stone-200 bg-white p-6 outline-none data-[state=closed]:animate-out data-[state=open]:animate-in">
						{navigation.slice(0, 1).map(({ to, text }) => (
							<MobileMenuItem key={to} to={to} text={text} />
						))}
						<ServiceMenu align="end" triggerClassName="w-fit sm:text-base" />
						{navigation.slice(1, 4).map(({ to, text }) => (
							<MobileMenuItem key={to} to={to} text={text} />
						))}
						<DropdownMenuPrimitive.Item
							onSelect={(e) => e.preventDefault()}
							asChild>
							<Link to="/appointments" className="outline-none">
								<Button>Marcar Consulta</Button>
							</Link>
						</DropdownMenuPrimitive.Item>
					</DropdownMenuPrimitive.Content>
				</DropdownMenuPrimitive.Portal>
			</DropdownMenuPrimitive.Root>
		</div>
	);
}
