import React, { useEffect, useState } from 'react'
import dataset from "./covid19_dataset.json";
import { FaVirus } from "react-icons/fa";
import Table from "./Table";

function App() {
  const [newData,setNewData] = useState([])
  
  useEffect(() => {
    setNewData(dataset);
  }, [])
  
  function handleSearch(e) {
        const filteredData = dataset.filter( (object) => {
          const keyWord = new RegExp( e.currentTarget.value ,'i')
          return (object['Country'].match( keyWord ));
        } )
        setNewData(filteredData);
  }

  

  return (
    <div className="flex flex-col bg-gray-900 text-gray-100 min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-thin my-10 flex text-center mx-auto items-center">
          <span className='hover:text-blue-300 transition-all duration-200 hover:animate-[spin_2s_linear_infinite]'><FaVirus className="mx-3" /></span>
          Covid19 DataSet
        </h1>
        <input type="text" onChange={handleSearch} placeholder='Search' className="mb-4 text-black p-1 rounded" />
      </div>
      <Table dataset={newData} />
    </div>
  );
}

export default App;
