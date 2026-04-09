export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-4 shadow-lg hover:scale-[1.02] transition-all ${className}`}>
      {children}
    </div>
  );
}