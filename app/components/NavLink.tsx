"use client";
import { Link } from "react-router";
import { useIsActivePath } from "./useIsActivePath";

type Props = React.ComponentProps<typeof Link> & {
  exact?: boolean;
};

export function NavLink({ exact, ...props }: Props) {
  const isActivePath = useIsActivePath();

  const isActive = isActivePath(props.to.toString(), exact);

  return (
    <Link
      {...props}
      className={`${
        isActive ? "dark:bg-gray-800 bg-gray-200 font-semibold" : ""
      } p-0.5 px-2 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md`}
    />
  );
}


