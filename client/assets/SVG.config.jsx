import HeartEx from "../assets/heart.svg";
import CalendarEx from "../assets/calendar.svg";
import ChevronDownArrowEx from "../assets/chevron-down-arrow.svg";
import ChevronRightArrowEx from "../assets/chevron-right-arrow.svg";
import ChevronLeftArrowEx from "../assets/chevron-left-arrow.svg";
import CresentEx from "../assets/cresent.svg";
import LocationPinEx from "../assets/location-pin.svg";
import MenuEx from "../assets/menu.svg";
import UserEx from "../assets/user.svg";
import PlusEx from "../assets/plus.svg";
import RightArrowEx from "../assets/right-arrow.svg";
import LeftArrowEx from "../assets/left-arrow.svg";
import SettingsEx from "../assets/setting.svg";
import SunEx from "../assets/sun.svg";
import DotEx from "../assets/dot.svg";
import SearchEx from "../assets/search.svg";
import HistoryEx from "../assets/history.svg";
import HouseEx from "../assets/house.svg";
import MapEx from "../assets/map.svg";
import StarEx from "../assets/star.svg";
import SlidersEx from "../assets/sliders-horizontal.svg";
import BathtubEx from "../assets/bathtub.svg";
import BedEx from "../assets/bed.svg";
import GuestEx from "../assets/guest.svg";
import RoomdoorEx from "../assets/room-door.svg";
import CloseEx from "../assets/close.svg";
import EditEx from "../assets/edit.svg";
import ShareEx from "../assets/share.svg";
import LogoEx from "../assets/logo.svg";
import TwitterEx from "../assets/twitter.svg";
import YoutubeEx from "../assets/youtube.svg";

export function Heart({ size, stroke, strokeWidth, fill }) {
	return (
		<HeartEx
			style={{
				width: `${size}px`,
				height: `${size}px`,
				stroke,
				strokeWidth,
				fill,
			}}
		/>
	);
}
export function Calendar({ size, fill }) {
	return (
		<CalendarEx style={{ width: `${size}px`, height: `${size}px`, fill }} />
	);
}
export function ChevronDownArrow({ size, fill }) {
	return (
		<ChevronDownArrowEx
			style={{ width: `${size}px`, height: `${size}px`, fill }}
		/>
	);
}
export function ChevronRightArrow({ size, fill, strokeWidth, stroke }) {
	return (
		<ChevronRightArrowEx
			style={{
				width: `${size}px`,
				height: `${size}px`,
				fill,
				strokeWidth,
				stroke,
			}}
		/>
	);
}
export function ChevronLeftArrow({ size, fill, strokeWidth, stroke }) {
	return (
		<ChevronLeftArrowEx
			style={{
				width: `${size}px`,
				height: `${size}px`,
				fill,
				strokeWidth,
				stroke,
			}}
		/>
	);
}
export function Cresent({ size, fill }) {
	return (
		<CresentEx style={{ width: `${size}px`, height: `${size}px`, fill }} />
	);
}
export function LocationPin({ size, fill }) {
	return (
		<LocationPinEx style={{ width: `${size}px`, height: `${size}px`, fill }} />
	);
}
export function Menu({ size, fill }) {
	return <MenuEx style={{ width: `${size}px`, height: `${size}px`, fill }} />;
}
export function User({ size, fill }) {
	return <UserEx style={{ width: `${size}px`, height: `${size}px`, fill }} />;
}
export function Plus({ size, fill }) {
	return <PlusEx style={{ width: `${size}px`, height: `${size}px`, fill }} />;
}
export function RightArrow({ size, fill, strokeWidth, stroke }) {
	return (
		<RightArrowEx
			style={{
				width: `${size}px`,
				height: `${size}px`,
				fill,
				strokeWidth,
				stroke,
			}}
		/>
	);
}
export function LeftArrow({ size, stroke, strokeWidth, fill }) {
	return (
		<LeftArrowEx
			style={{
				width: `${size}px`,
				height: `${size}px`,
				stroke,
				strokeWidth,
				fill,
			}}
		/>
	);
}
export function Settings({ size, fill }) {
	return (
		<SettingsEx style={{ width: `${size}px`, height: `${size}px`, fill }} />
	);
}
export function Sun({ size, fill }) {
	return <SunEx style={{ width: `${size}px`, height: `${size}px`, fill }} />;
}
export function Dot({ size, fill }) {
	return (
		<DotEx
			style={{
				width: `${size}px`,
				height: `${size}px`,
				fill,
			}}
		/>
	);
}
export function Search({ size, stroke, strokeWidth = 2 }) {
	return (
		<SearchEx
			style={{
				width: `${size}px`,
				height: `${size}px`,
				stroke,
				strokeWidth,
			}}
		/>
	);
}
export function History({ size, fill }) {
	return (
		<HistoryEx style={{ width: `${size}px`, height: `${size}px`, fill }} />
	);
}
export function House({ size, fill }) {
	return <HouseEx style={{ width: `${size}px`, height: `${size}px`, fill }} />;
}
export function Map({ size, fill }) {
	return <MapEx style={{ width: `${size}px`, height: `${size}px`, fill }} />;
}
export function Star({ size, fill }) {
	return <StarEx style={{ width: `${size}px`, height: `${size}px`, fill }} />;
}
export function Sliders({ size, stroke, strokeWidth }) {
	return (
		<SlidersEx
			style={{ width: `${size}px`, height: `${size}px`, stroke, strokeWidth }}
		/>
	);
}
export function Bathtub({ size, stroke, strokeWidth }) {
	return (
		<BathtubEx
			style={{ width: `${size}px`, height: `${size}px`, stroke, strokeWidth }}
		/>
	);
}
export function Bed({ size, stroke, strokeWidth }) {
	return (
		<BedEx
			style={{ width: `${size}px`, height: `${size}px`, stroke, strokeWidth }}
		/>
	);
}
export function Guest({ size, stroke, strokeWidth }) {
	return (
		<GuestEx
			style={{ width: `${size}px`, height: `${size}px`, stroke, strokeWidth }}
		/>
	);
}
export function Roomdoor({ size, stroke, strokeWidth }) {
	return (
		<RoomdoorEx
			style={{ width: `${size}px`, height: `${size}px`, stroke, strokeWidth }}
		/>
	);
}
export function Close({ size, stroke, strokeWidth, fill }) {
	return (
		<CloseEx
			style={{
				width: `${size}px`,
				height: `${size}px`,
				stroke,
				strokeWidth,
				fill,
			}}
		/>
	);
}
export function Edit({ size, stroke, strokeWidth, fill }) {
	return (
		<EditEx
			style={{
				width: `${size}px`,
				height: `${size}px`,
				stroke,
				strokeWidth,
				fill,
			}}
		/>
	);
}
export function Share({ size, stroke, strokeWidth }) {
	return (
		<ShareEx
			style={{ width: `${size}px`, height: `${size}px`, stroke, strokeWidth }}
		/>
	);
}
export function Logo({ size, stroke, strokeWidth }) {
	return (
		<LogoEx
			style={{
				width: `${size}px`,
				height: `${size}px`,
				stroke,
				strokeWidth,
				cursor: "pointer",
			}}
		/>
	);
}
export function Youtube({ size }) {
	return (
		<YoutubeEx
			style={{
				width: `${size}px`,
				height: `${size}px`,
				cursor: "pointer",
			}}
		/>
	);
}
export function Twitter({ size }) {
	return (
		<TwitterEx
			style={{
				width: `${size}px`,
				height: `${size}px`,
				cursor: "pointer",
			}}
		/>
	);
}
