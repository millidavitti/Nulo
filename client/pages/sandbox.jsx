import React from "react";
import sandbox from "../styles/sandbox.module.css";
export default function Sandbox() {
	return (
		<div className={sandbox.fixed}>
			<div className={sandbox.child2}></div>
			<div className={sandbox.child}></div>
		</div>
	);
}
