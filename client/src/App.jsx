import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { Link } from 'react-router-dom'
import axios, { all } from 'axios'

//App is working as my homepage of affiliate website;
function App() {

  const [allJobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      async function getAllJobs() {
        const response = await axios.get("http://localhost:8080/api/jobs");
        setLoading(false);
        setJobs((response.data).slice(0, 3));
      }

      getAllJobs();
    }, 1000);
  }, [])

  console.log(allJobs);

  return (
    <>
      {
        loading == true ?
          <div className='loading_screen_div'>
            <h1 className='logo'>JD</h1>
            <h1 className='logotext'>JobDhundo</h1>
          </div>
          :
          <div className='wrapper'>
            <Header />

            {/* main section */}
            <section className='mySection1'>

              <div className='subsection'>
                <img src="/public/team.png" alt="team" />
                <h1 style={{ fontStyle: 'italic' }}>#WeBringSuccessToYou!</h1>
              </div>

            </section>



            {

              allJobs.length == 0 ? '' : <section className='mySection2'>
                <div className='recommendationDiv'>
                  <div style={{ display: 'flex' }}>
                    <img src="/public/certificate.png" alt="" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                    <h1>Top Recommedations</h1>
                  </div>

                  <Link to={'/jobs'} className='link viewLinkBtn'>
                    <button className='viewBtn'>View All</button>
                  </Link>
                </div>


                <div className='recmdContainer'>
                  {
                    //Top Recommended Jobs Logic-
                    allJobs.map((job) => (
                      <div key={job.id} className='jobChild'>
                        <h1 style={{ fontSize: '1.3em' }}>{job.role}</h1>

                        <div style={{ width: '100%', height: '100px', display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
                          <p>{job.experience}</p>
                          <p>{job.company} </p>
                          <p>{job.salary} </p>
                        </div>

                        <div className='btns' style={{ display: 'flex', justifyContent: 'space-around' }}>
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

              </section>
            }

            <Footer />
          </div>
      }

    </>
  )
}

export default App