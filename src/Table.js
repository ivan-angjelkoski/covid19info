import React from 'react'
import TableDataCell from './TableDataCell'

const Table = ({ dataset }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  return (
    <table  className="w-[90%] mx-auto my-3">
    <thead>
      <tr className="border-b-2">
        <th className=" p-2 border-r-2">Country</th>
        <th className="hidden sm:table-cell p-2 border-r-2">Population</th>
        <th className="hidden sm:table-cell p-2 border-r-2">Total Cases</th>
        <th className=" p-2 sm:border-r-2 border-0">Total Deaths</th>
        <th className="hidden sm:table-cell p-2 ">Deaths Percentage</th>
      </tr>
    </thead>
    <tbody>
        { dataset.map( (data,i) => <TableDataCell countryData={data} key={i} id={i} numberWithCommas={numberWithCommas} /> ) }
    </tbody>
  </table>
  )
}

export default Table