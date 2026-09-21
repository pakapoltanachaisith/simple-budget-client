import { Link } from "react-router";
import { NavLink } from "@mantine/core";
import type { ReactNode } from "react";

interface NavbarLinkProps {
  label: string;
  icon?: ReactNode;
  path: string;
  active?: boolean;
}

export default function NavbarLink({
  label,
  path,
  icon,
  active,
}: NavbarLinkProps) {
  return (
    <NavLink
      component={Link}
      to={path}
      leftSection={icon}
      active={active}
      label={label}
    />
  );
}
