import React from 'react'

import { ChartsHeader, LineChart } from '../../components'

const Line = () => {
  return (
    <div className='m-4 md:m-10 p-10 mt-24 rounded-3xl bg-white '>
      <ChartsHeader category="Line" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  )
}

export default Line