import Link from "next/link";
import React from "react";
import { Logo } from "../assets/SVG.config";

export default function Nulo({ size }) {
	return (
        (<Link href='/'>

            <Logo size={size} />

        </Link>)
    );
}
