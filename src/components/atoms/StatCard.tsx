import type { StatCardInterface } from "../../types/StatCardInterface";

export default function StatCard({ title, value, icon }: StatCardInterface) {
  return (
    <>
      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
        {icon && (
          <div className="p-3 bg-gray-200 rounded-full text-gray-700 text-2xl flex items-center justify-center">
            {icon}
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </>
  );
}
