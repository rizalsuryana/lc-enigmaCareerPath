import type { TitleInterface } from "../../types/TitleInterface";

export default function Title({ title, description }: TitleInterface) {
  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </>
  );
}
