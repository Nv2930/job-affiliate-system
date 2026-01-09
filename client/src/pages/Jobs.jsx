import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

//client side jobs section-
function Jobs() {
  const [jobsArr, setJobsArr] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {

      async function getAllJobs() {
        const response = await axios.get("http://localhost:8080/api/jobs");
        setJobsArr(response.data);
        setLoading(false);
      }

      getAllJobs();
    }, 700);
  }, [])

  return (
    <>
      {
        loading == true ?
          <div className='emptyJobArr'>
            <h1>Loading...</h1>
          </div>
          :
          (jobsArr.length == 0) ?
            <div className='emptyJobArr'>
              <img src="/public/employee.png" alt="hiringPNG" />
              <h1 style={{ fontSize: '2.6em', color: 'black', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>No Jobs</h1>
            </div>
            :

            <div className='jobListContainer'>
              {
                jobsArr.map((job, index) => (
                  <div key={job.id} className='jobChild'>
                    <h1 style={{ fontSize: '1.3em' }}>{job.role}</h1>

                    <div style={{ width: '100%', height: '100px', display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
                      <p>{job.experience}</p>
                      <p>{job.company} </p>
                      <p>{job.salary} </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                      <Link className='link' to={`/jobs/${job.slug}`}>
                        <button className='job_btn'>Details</button>
                      </Link>

                       <a href={job.url} target='_blank'>
                          <button className='job_btn'>Apply</button>
                        </a>
                    </div>
                  </div>
                ))
              }
            </div>
      }
    </>
  )
}

export default Jobs