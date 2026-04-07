export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick}className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl text-white transition">{children}</button>
  );
}