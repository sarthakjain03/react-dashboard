import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, BarSeries, Tooltip, DataLabel, Category, ColumnSeries } from '@syncfusion/ej2-react-charts'

import { ChartsHeader } from '../../components'
import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy'
// import { useStateContext } from '../../contexts/ContextProvider'

const Bar = () => {
  // const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 p-10 mt-24 rounded-3xl bg-white '>
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <ChartComponent
      id="bar-chart"
      height="420px"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{border: {width: 0}}}
      tooltip={{enable: true}}
      legendSettings={{ background: 'white' }}
      // background={currentMode==='Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[Legend, BarSeries, Tooltip, Category, DataLabel, ColumnSeries]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar