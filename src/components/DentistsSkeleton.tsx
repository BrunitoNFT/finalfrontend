import React from "react";

interface Props {
  id: number;
}
const DentistsSkeleton: React.FC<Props> = ({ id }) => {
  return (
    <div
      key={id}
      className="w-52 h-96 bg-blue-100 rounded-md shadow-md animate-pulse p-4 dark:bg-blue-200  "
    >
      <div className="flex flex-col gap-2 bg-blue-200 w-full h-6 dark:bg-slate-400"></div>
      <div className="flex flex-col gap-2 bg-blue-200 w-1/2 h-2 mt-4 dark:bg-slate-400"></div>
      <div className="flex flex-col w-full h-3/4 justify-end">
        <div className="flex flex-col gap-2 bg-blue-200 w-full h-40 mt-4 dark:bg-slate-400"></div>
        <div className="flex flex-col gap-2 bg-blue-200 w-full h-10 mt-4 dark:bg-slate-400"></div>
      </div>
    </div>
  );
};

export default DentistsSkeleton;
