interface MenuProps {
  icon: React.ReactNode;
  label: string;
}

export default function LoginMenuCard({ icon, label }: MenuProps) {
  return (
    <>
      <div className="flex items-center space-x-4 group">
        <div className="bg-white/15 p-3 rounded-xl backdrop-blur-sm group-hover:bg-white/25 transition">
          {icon}
        </div>
        <p className="text-base font-medium tracking-wide">{label}</p>
      </div>
    </>
  );
}
