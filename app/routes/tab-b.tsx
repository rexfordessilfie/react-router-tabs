import { Counter2 } from "~/components";

export default function TabB() {
  return (
    <div className="border bg-red-500 dark:bg-red-600 p-2 rounded-md flex flex-col gap-2 dark:border-gray-500">
      <h1 className="font-semibold">Tab B</h1>
      <Counter2 id="tab-b" label="Page" />
    </div>
  );
}
