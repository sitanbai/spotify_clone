import React from "react";
import Link from "@/node_modules/next/link";
import { twMerge } from "tailwind-merge";
import { Icon } from "react-icons";

interface SidebarItemProps {
  icon: Icon;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex
  flex-row
  h-auto
  items-center
  w-full
  gap-x-4
  text-md
  cursor-pointer
  font-medium
  hover:text-white
  transition
  text-neutral-400
  py-1`,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
