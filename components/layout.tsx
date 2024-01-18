import {ReactNode} from "react";
import clsx from "clsx";
import {londrinaSolid} from "../styles/fonts";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({children}: LayoutProps) {
  return (
    <main className={clsx(londrinaSolid.variable, 'bg-gray-900')}>
      {children}
    </main>
  );
}
