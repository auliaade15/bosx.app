export default function AlertBox({ type = "info", children }) {
  const baseClass =
    "px-4 py-3 rounded-2xl mb-6 shadow-md border text-sm font-medium";

  const styles = {
    success: "bg-red-50 border-red-300 text-red-700",
    error: "bg-red-100 border-red-400 text-red-800",
    info: "bg-red-200 border-red-500 text-red-900",
  };

  return (
    <div className={`${baseClass} ${styles[type] || styles.info}`}>
      {children}
    </div>
  );
}
