export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-60 gap-4">
      <div className="animate-spin rounded-full h-14 w-14 border-4 border-gray-700 border-t-green-500"></div>
      <p className="text-gray-400">Carregando times...</p>
    </div>
  );
}