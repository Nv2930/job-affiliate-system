import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import './admin.css'

function JobPortal() {
  const [jobArr, setJobArr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {

      async function f1() {
        const response = await axios.get("http://localhost:8080/api/admin/jobs");
        setJobArr(response.data);
        setLoading(false);
      }
      f1();
      
    }, 700);
  }, [])

  console.log(jobArr);

  async function deleteJob(id) {
    //api call to delete job;
    const response = await axios.delete(`http://localhost:8080/api/admin/jobs/${id}`);
    setJobArr(response.data);
  }

  return (
    <>
      {
        loading == true ?
          <div className='emptyJobArr'>
            <h1>Loading...</h1>
          </div>
          :
          (jobArr.length == 0) ?
            <div className='emptyJobArr'>
              <img src="/public/employee.png" alt="hiringPNG" />
              <h1 style={{ fontSize: '3.6em', color: 'black', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>No Jobs</h1>
            </div> :
            <div className='jobAdminWrapper'>
              <div className='jobTblDiv'>
                <table className='jobAdminTable'>
                  <thead>
                    <th>id</th>
                    <th>role</th>
                    <th>company</th>
                    <th>category</th>
                    <th>type</th>
                    <th>degree</th>
                    <th>experience</th>
                    <th>location</th>
                    <th>salary</th>
                    <th>skills</th>
                    <th>slug</th>
                    <th>status</th>
                    <th>url</th>
                    <th>action</th>
                  </thead>

                  <tbody>
                    {
                      jobArr.map((job) => (
                        <tr key={job.id}>
                          <td>{job.id}</td>
                          <td>{job.role}</td>
                          <td>{job.company}</td>
                          <td>{job.category}</td>
                          <td>{job.type}</td>
                          <td>{job.degree}</td>
                          <td>{job.experience}</td>
                          <td>{job.location}</td>
                          <td>{job.salary}</td>
                          <td>{job.skills}</td>
                          <td>{job.slug}</td>
                          <td>{job.status}</td>
                          <td><a href={job.url} target='_blank'>{job.url}</a></td>
                          <td>
                            <button className='dltBtn' onClick={() => {
                              deleteJob(job.id);
                            }}>delete</button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
      }
    </>
  )
}

export default JobPortal