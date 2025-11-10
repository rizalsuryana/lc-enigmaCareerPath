import Required from "./Required";
interface LabelProps {
  title: string;
}
export default function Label({ title }: LabelProps) {
  return (
    <>
      <label className="block mb-2 text-md font-bold text-gray-900">
        {title}
        <Required />
      </label>
    </>
  );
}
