import React from 'react'

const TableDataCell = ({ countryData ,id ,numberWithCommas }) => {
  return (
    <tr className={ ` ${ (id%2===1) ? 'bg-gray-700' : 0 } rounded-full hover:bg-gray-600` } >
        <td className=" p-2 border-r-2">{id+1}. { countryData['Country'] }</td>
        <td className="hidden sm:table-cell p-2 border-r-2">{ numberWithCommas( parseInt(countryData['Population'] ) ) }</td>
        <td className="hidden sm:table-cell p-2 border-r-2">{ numberWithCommas( parseInt(countryData['Total Cases'] ) ) }</td>
        <td className=" p-2 sm:border-r-2 border-0">{ numberWithCommas( parseInt(countryData['Total Deaths'] ) ) }</td>
        <td className="hidden sm:table-cell p-2 ">{ Math.floor(parseInt(countryData['Death percentage'])) }%</td>
      </tr>
  )
}

export default TableDataCell


// numberWithCommas( parseInt(countryData['Population'] ) )
// numberWithCommas( parseInt(countryData['Total Cases'] ) )
// numberWithCommas( parseInt(countryData['Total Deaths'] ) )


// <td className=" p-2 border-r-2">{id+1}. { countryData['Country'] }</td>
// <td className="hidden sm:table-cell p-2 border-r-2">{ countryData['Population'] }</td>
// <td className="hidden sm:table-cell p-2 border-r-2">{ countryData['Total Cases'] }</td>
// <td className=" p-2 sm:border-r-2 border-0">{ countryData['Total Deaths'] }</td>
// <td className="hidden sm:table-cell p-2 ">{ Math.floor(parseInt(countryData['Death percentage'])) }%</td>