import logo from "../assets/logo.webp";
import { cn } from "../lib/utils";

export function Logo({
	className,
	...props
}: Omit<React.ComponentProps<"img">, "src" | "alt">) {
	return (
		<img
			src={logo}
			alt="Clínica Dr. Almeno Vieira Leite"
			className={cn("w-24 select-none sm:w-30 2xl:w-32", className)}
			{...props}
		/>
	);
}
