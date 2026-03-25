import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 40"
      width="160"
      height="40"
      {...props}
    >
      <g className="group">
        <circle cx="20" cy="20" r="16" className="fill-primary transition-colors duration-300" />
        <path
          d="M20 10 V 30 M 10 20 H 30"
          strokeWidth="4"
          className="stroke-primary-foreground transition-colors duration-300"
          strokeLinecap="round"
        />
        <text
          x="48"
          y="29"
          fontFamily="'PT Sans', sans-serif"
          fontSize="28"
          fontWeight="bold"
          className="fill-foreground transition-colors duration-300"
        >
          M.ez
        </text>
      </g>
    </svg>
  );
}
