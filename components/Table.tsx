import React from 'react'

export default function Table({
  columns,
  renderRow,
  data
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) {
  return (
    <table className='w-full'>
      <thead>
        <tr className='text-left font-semibold text-sm text-gray-500'>
          {columns.map((column, index) => (
            <th key={index} className={column.className}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item, index) => (<React.Fragment key={index}>{renderRow(item)}</React.Fragment>))}</tbody>
    </table>
  )
}
