import { Outlet } from "react-router";
import { Counter2, NavLink } from "~/components";

export default function Layout() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-fit gap-4 text-center flex py-2 mx-auto">
        <NavLink to="/tab-a">Tab A Home</NavLink>
        <NavLink to="/tab-a/sub-a">Sub A</NavLink>
      </div>

      <div className="border rounded-md p-2 flex flex-col gap-2 dark:border-gray-500">
        <Counter2 id="tab-a-layout" label="Layout" />
        <Outlet />
      </div>
    </div>
  );
}
