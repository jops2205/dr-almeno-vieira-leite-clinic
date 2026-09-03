import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

export function ClinicMap() {
	const position: [number, number] = [41.6389, -8.1388];

	return (
		<div className="h-[24rem] rounded-2xl border border-border bg-white p-2 shadow-sm md:h-[32rem]">
			<MapContainer
				center={position}
				zoom={15}
				scrollWheelZoom
				className="h-full rounded-xl outline-none">
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position} />
			</MapContainer>
		</div>
	);
}
