import {ReactNode} from "react";
import clsx from "clsx";
import {londrinaSolid} from "../styles/fonts";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({children}: LayoutProps) {
  return (
    <main className={clsx(londrinaSolid.variable, 'min-h-screen')}>
      {children}
    </main>
  );
}
