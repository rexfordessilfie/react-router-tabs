import {  Outlet } from "react-router";
import { CountersProvider, Counter2, NavLink } from "~/components";





export default function Layout() {
  return (
    <CountersProvider>

      
    <div
      className={`antialiased flex flex-col flex-1 items-center p-4 dark:text-gray-300`}
    >
      <div className="w-full max-w-screen-sm flex-col flex">
        <div className="flex-col flex gap-2 min-h-72">
          <div className="w-fit gap-4 text-center flex mx-auto py-2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/tab-a">Tab A</NavLink>
              <NavLink to="/tab-b">Tab B</NavLink>
              <NavLink to="/tab-c">Tab C (children)</NavLink>
            </div>

            <div
              key={1}
              className="p-2 border dark:border-gray-500 rounded-md flex flex-col gap-2"
            >
              <Counter2 id='layout' label="Layout" />
              <Outlet />
            </div>
          </div>

          <div className="w-full [&_p]:mb-1">
            <hr className="w-full border-t dark:border-gray-500 mt-8 mb-2" />
            <h1 className="text-2xl font-bold mb-2">
              react-router-tabs{" "}
              <i className="text-base font-normal">
                Persistent route pages in React Router
              </i>
            </h1>

            <p className="font-semibold">Description</p>
            <ul className="list-disc list-inside [&>li]:mb-2 mt-3 ml-2">
              <li>
                In Next.js, layouts automatically persist state across route
                changes.
              </li>

              <li>
                However, the client state for pages are reset on each
                navigation.
              </li>

              <li>
                This demo showcases how to maintain state across different
                routes using parallel routes.
              </li>
            </ul>

            <p className="font-semibold">Instructions</p>
            <ol className="list-decimal list-inside [&>li]:mb-2 mt-3 ml-2">
              <li>
                Click on the tabs above to navigate between the different routes
              </li>

              <li>
                The counters on each page will start once you navigate to the
                page
              </li>
              <li>
                Notice that all counters (not just layout counters) continue to
                increment even as you switch tabs
              </li>
              <li>
                This also works with switching tabs via the browser back and
                forward buttons
              </li>
            </ol>

            <p>
              You will notice that Home and Tab C reset each other as you click
              back and forth between them. This is because they share the same
              slot, <code>children</code>.<br></br>To truly have full tab-like
              behavior, each tab should have its own unique slot.
            </p>
          </div>
          <div className="w-full text-center mt-8">
            <a href="https://github.com/rexfordessilfie/react-router-tabs">
              github ↗
            </a>
          </div>
        </div>
      </div>
    </CountersProvider>
  );
}
