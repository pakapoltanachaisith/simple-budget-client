import { NavLink } from "react-router";
import { NavLink as MNavLink } from "@mantine/core";
import type { ReactNode } from "react";

interface NavbarLinkProps {
  label: string;
  icon?: ReactNode;
  path: string;
}

export default function NavbarLink({ label, path, icon }: NavbarLinkProps) {
  return (
    <NavLink to={path} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <MNavLink label={label} leftSection={icon} active={isActive} />
      )}
    </NavLink>
  );
}
