export default function GenericTable({ columns, data, renderRow }) {
  return (
    <table className="min-w-full divide-y divide-green-100 overflow-hidden rounded-2xl shadow-lg">
      <thead className="bg-green-600 text-white">
        <tr>
          {columns.map((col, idx) => (
            <th
              key={idx}
              className="px-6 py-3 text-left text-sm font-semibold tracking-wide"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-green-50 text-sm text-gray-800">
        {data.map((item, index) => (
          <tr key={index}>{renderRow(item, index)}</tr>
        ))}
      </tbody>
    </table>
  );
}
