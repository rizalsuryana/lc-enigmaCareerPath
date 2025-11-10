import type { SearchInterface } from "../../types/SearchInterface";

export default function SearchMenu({
  title,
  placeholder,
  searchTerm,
  onSearchChange,
}: SearchInterface) {
  return (
    <>
      <div className="mt-6 flex justify-between items-center flex-wrap gap-3">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-gray-800 focus:outline-none transition"
        />
      </div>
    </>
  );
}
