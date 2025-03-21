export default function SkillButton({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
    const colorClasses: {
    [key: string]: string;
  } = {
    sky: "bg-sky-700",
    red: "bg-red-700",
    blue: "bg-blue-800",
    // add other colors as needed
  };

  return (
    <div
      className={`inline-block bg-blue-500 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-blue-500 mr-2 mb-2 rounded-full`}
    >
      <button>{text}</button>
    </div>
  );
}
