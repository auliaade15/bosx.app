export default function Table({ columns, data }) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border">
          <thead className="bg-blue-100">
            <tr>
              {columns.map((col) => (
                <th key={col.accessor} className="text-left p-2 border">
                  {col.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="even:bg-blue-50">
                {columns.map((col) => (
                  <td key={col.accessor} className="p-2 border">
                    {row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }