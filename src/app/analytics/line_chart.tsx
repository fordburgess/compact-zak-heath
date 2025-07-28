import React, { useState, useEffect } from 'react'
import "./line_chart.css";

type LineChart = {
  data: any,
}

const LineChart: React.FC<LineChart> = ({ data }) => {
  const [pageViews, setPageViews] = useState<any>([]);
  const [dates, setDates] = useState<any>([]);
  const [highestVal, setHighestVal] = useState<number>(0);


  useEffect(() => {
    var today = Date.now();
    var startDate = new Date().setDate(new Date(today).getDate() - 30);

    var datesArray: any = [];
    while (startDate !== today) {
      datesArray.push(startDate)
      startDate = new Date(startDate).setDate(new Date(startDate).getDate() + 1);
    }

    setDates(datesArray)
  }, [])

  useEffect(() => {
    if (data) setPageViews(data.pageviews)

    var num = 0;
    console.log(data)
    data.pageviews.forEach((day) => {
      if (day.y > num) {
        num = day.y
      }
    })

    setHighestVal(num + 30);
  }, [])

  useEffect(() => {
    console.log({highestVal});
  }, [highestVal])

  return (
    <div className='line-chart-container'>
      {
        pageViews.length > 0 && (
          <>
            <div style={{ display: 'flex', alignItems: 'flex-end', height: "90%", width: "100%"}}>
              <div className="y-axis">
                <div className='y-axis-sub'><p style={{ fontSize: '0.75rem', fontWeight: 300 }}>{Math.floor(highestVal / 10) * 10}</p></div>
                <div className='y-axis-sub'><p style={{ fontSize: '0.75rem', fontWeight: 300 }}>{Math.floor(highestVal * 0.75 / 10) * 10}</p></div>
                <div className='y-axis-sub'><p style={{ fontSize: '0.75rem', fontWeight: 300 }}>{Math.floor(highestVal * 0.5/ 10) * 10}</p></div>
                <div className='y-axis-sub'><p style={{ fontSize: '0.75rem', fontWeight: 300 }}>{Math.floor(highestVal * 0.25 / 10) * 10}</p></div>
              </div>
              {
                dates.length > 0 && (
                  dates.map((date: number, i: number) => {
                    const readableDate = new Date(date);
                    readableDate.setUTCHours(0, 0, 0, 0);
                    const isoString = readableDate.toISOString()

                    const test2 = pageViews.find((day) => new Date(day.x).getTime() == new Date(isoString).getTime());

                    const height = test2 ? test2.y * 5 : 0;
                    return (
                      <div style={{ flex: 1, margin: '0 2px', border: 'solid 1px rgb(0, 135, 277)', backgroundColor: 'rgba(0, 135, 277, 0.5', height: height }}></div>
                    )

                  })
                )
              }
            </div>
            <div className="x-axis">
              {
                dates.length > 0 && (
                  dates.map((date: number, i: number) => {

                    const month = new Date(date).toLocaleString('default', { month: 'short' });
                    const day = new Date(date).getDate();
                    const indices = [0, 5, 11, 17, 23, 29];
                    const dateString = indices.includes(i) ? `${month} ${day}` : '';


                    return (
                      <div style={{ flex: 1, textWrap: 'nowrap', textAlign: 'center' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: '300' }}>{dateString}</p>
                      </div>
                    )
                  })
                )
              }
            </div>
          </>
        )
      }
    </div>
  )
}

export default LineChart
