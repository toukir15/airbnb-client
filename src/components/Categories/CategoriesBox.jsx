export default function CategoriesBox({ item }) {
  const { label, icon: Icon } = item || [];
  return (
    <div className="flex flex-col items-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500 cursor-pointer">
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
}
