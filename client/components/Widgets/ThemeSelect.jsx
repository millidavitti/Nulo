/*prettier-ignore */
import { useContext, useEffect } from "react";
import { Cresent, Sun } from "../../assets/SVG.config";
import AppCtx from "../../utils/AppContext";

export default function ThemeSelect() {
	const [state, dispatch] = useContext(AppCtx);
	useEffect(() => {
		localStorage.getItem("darkmode") ||
			localStorage.setItem("darkmode", `false`);
		dispatch({
			type: "toggle-darkmode",
			mode: JSON.parse(localStorage.getItem("darkmode")),
		});
	}, [dispatch]);

	useEffect(() => {
		const doc = document.documentElement;
		state.darkMode
			? doc.style.setProperty("--bg", "#111827")
			: doc.style.setProperty("--bg", "#fff");
		state.darkMode
			? doc.style.setProperty("--bgd", "#0e131f")
			: doc.style.setProperty("--bgd", "#fff");
		state.darkMode
			? doc.style.setProperty("--newsLetter", "#0e131f")
			: doc.style.setProperty("--newsLetter", "#dbeafe");
		state.darkMode
			? doc.style.setProperty("--grey", "#0e131f")
			: doc.style.setProperty("--grey", "#f3f4f6");
		state.darkMode
			? doc.style.setProperty("--headers", "white")
			: doc.style.setProperty("--headers", "#111827");
		state.darkMode
			? doc.style.setProperty("--highlights", "#1f2937")
			: doc.style.setProperty("--highlights", "#cacccd");
		state.darkMode
			? doc.style.setProperty("--outline", "var(--descriptions)")
			: doc.style.setProperty("--outline", "#cacccd");
		state.darkMode
			? doc.style.setProperty("--a", "var(--d)")
			: doc.style.setProperty("--a", "#f3f4f6");
		state.darkMode
			? doc.style.setProperty("--navHeader", "rgba(0, 0, 0, 0.374)")
			: doc.style.setProperty("--navHeader", "#fffffdc");
	});

	return (
		<span
			className='theme-selector'
			onClick={() => {
				localStorage.setItem(
					"darkmode",
					`${!JSON.parse(localStorage.getItem("darkmode"))}`,
				);
				dispatch({
					type: "toggle-darkmode",
					mode: JSON.parse(localStorage.getItem("darkmode")),
				});
			}}
		>
			{state.darkMode ? (
				<Cresent size={25} fill='var(--headers)' />
			) : (
				<Sun size={25} fill='var(--headers)' />
			)}
		</span>
	);
}
