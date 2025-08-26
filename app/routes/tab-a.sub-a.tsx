import { Counter2 } from "~/components";

export default function SubA() {
  return (
    <div className="border bg-purple-500 dark:bg-purple-600 p-2 rounded-md flex flex-col gap-2 dark:border-gray-500">
      <h1 className="font-semibold">Sub A</h1>
      <Counter2 id='tab-a-sub-a' label="Page" />
    </div>
  );
}
