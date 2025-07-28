"use client";
import React, { useState, useEffect } from 'react';
import './styles.css';
import LineChart from './line_chart';

const Analytics = () => {
  const [data, setData] = useState<any>({});
  const [totalReferrals, setTotalReferrals] = useState<any>(0);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("api/analytics");
      const newData: any = await res.json();

      setData(newData);
    }

    getData();
  }, [])

  useEffect(() => {
    if (data.referrer) {
      const total = Object.values(data.referrer).reduce((a, b: any) => a + b.y, 0);
      setTotalReferrals(total);
    }
  }, [data])

  return (
    <div className='analytics-container'>
      {
        Object.keys(data).length > 0 ? (
          <div>
            <div className='analytics-header'>
              <h1>Analytics</h1>
              <select>
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>Today</option>
              </select>
            </div>
            <div className='sessions-section'>
              <div className='sessions-header'>
                <div className='sessions-number-box'><h6>Visits</h6><h1>{data.stats.visits.value}</h1></div>
                <div className='sessions-number-box'><h6>Page Views</h6><h1>{data.stats.pageviews.value}</h1></div>
                <div className='sessions-number-box' id="bounces"><h6>Bounces</h6><h1>{data.stats.bounces.value}</h1></div>
              </div>
              <div className='sessions-graph'>
                <LineChart data={data.unitData}/>
              </div>
            </div>
            <div className='other-info-container'>
              <div className='horizontal-graph-box'>
                <div className='graph-box-header'>
                  <h6>Pages</h6>
                  <p>PAGE VIEWS</p>
                </div>
                <div>
                  {
                    Object.values(data.url).map((url: any) => {
                      return (
                        <div className='graph-bar'>
                          <span>{url.x}</span>
                          <span>{url.y}</span>
                          <div
                            className='bar-filler'
                            style={{ width: `${(url.y / data.stats.pageviews.value) * 100}%`}}
                          >
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className='horizontal-graph-box'>
                <div className='graph-box-header'>
                  <h6>Referrers</h6>
                  <p>REFERRALS</p>
                </div>
                <div>
                  {
                    Object.values(data.referrer).map((referrer: any) => {
                      return (
                        <div className='graph-bar'>
                          <span>{referrer.x}</span>
                          <span>{referrer.y}</span>
                          <div
                            className='bar-filler'
                            style={{ width: `${(referrer.y / totalReferrals) * 100}%`}}
                          >
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='other-info-container'>
              <div className='horizontal-graph-box'>
                <div className='graph-box-header'>
                  <h6>Country</h6>
                  <p>PAGE VIEWS</p>
                </div>
                <div>
                  {
                    Object.values(data.country).map((country: any) => {
                      return (
                        <div className='graph-bar'>
                          <span>{country.x}</span>
                          <span>{country.y}</span>
                          <div
                            className='bar-filler'
                            style={{ width: `${(country.y / data.stats.pageviews.value) * 100}%`}}
                          >
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className='horizontal-graph-box'>
                <div className='graph-box-header'>
                  <h6>Browser</h6>
                  <p>PAGE VIEWS</p>
                </div>
                <div>
                  {
                    Object.values(data.browser).map((browser: any) => {
                      return (
                        <div className='graph-bar'>
                          <span>{browser.x == "ios" ? "safari" : browser.x}</span>
                          <span>{browser.y}</span>
                          <div
                            className='bar-filler'
                            style={{ width: `${(browser.y / data.stats.pageviews.value) * 100}%`}}
                          >
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className='horizontal-graph-box'>
                <div className='graph-box-header'>
                  <h6>Operating System</h6>
                  <p>PAGE VIEWS</p>
                </div>
                <div>
                  {
                    Object.values(data.os).map((os: any) => {
                      return (
                        <div className='graph-bar'>
                          <span>{os.x == "ios" ? "safari" : os.x}</span>
                          <span>{os.y}</span>
                          <div
                            className='bar-filler'
                            style={{ width: `${(os.y / data.stats.pageviews.value) * 100}%`}}
                          >
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='loading-container'>
            <span className="loader"></span>
            <p>Loading</p>
          </div>
        )
      }
    </div>
  )
}

export default Analytics
