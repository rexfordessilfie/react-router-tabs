import { Counter2 } from "~/components";

export default function TabA() {
  return (
    <div className="border bg-blue-500 dark:bg-blue-600 p-2 rounded-md flex flex-col gap-2 dark:border-gray-500">
      <h1 className="font-semibold">Tab A</h1>
      <Counter2 id="tab-a" label="Page" />
    </div>
  );
}
