export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#2A2D34]">
      <div className="w-12 h-12 border-4 border-[#2FC2A5] border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-[#2FC2A5] text-lg font-medium">
        Loading...
      </p>
    </div>
  );
}
