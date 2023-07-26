/* eslint-disable react/prop-types */
export default function Heading({ title, desc, place, color, margin }) {
  return (
    <div className={`${margin} ${place} ${color}`}>
      <h2 className="font-bold text-2xl mb-3">{title}</h2>
      <p className="text-sm">{desc}</p>
    </div>
  );
}
