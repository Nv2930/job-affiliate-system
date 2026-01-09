import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function JobPage() {
    let params = useParams();
    const [job, setJob] = useState({})
    const[loading, setLoading]=useState(true);

    useEffect(() => {
        async function findJobBySlug() {
            let response = await axios.get(`http://localhost:8080/api/job/${params.slug}`);
            
            setTimeout(()=>{
                setJob(response.data);
                setLoading(false);
            }, 700)
        }

        findJobBySlug();
    }, [])

    console.log(job);

    return (
        <div>
            {
                loading==true?  <div className='emptyJobArr'>
            <h1>Loading...</h1>
          </div>:

          <div className='mySpeciJobWrapper'>
                {/* Section 1- Short Overview */}
                <div className='sectionJobSpeci overview_section'>
                    <h1 style={{fontSize:'2em'}}>{job.role}</h1>
                    
                    <a href={job.url} target='_blank'>
                        <button className='applyBtnSinglePage'>Apply</button>
                    </a>

                    <ul>
                        <li style={{listStyleType:'decimal'}}>
                            <h3>company: </h3>
                            {job.company}
                        </li>


                        <li>
                            <h3>location: </h3>
                            {job.location}
                        </li>


                        <li>
                            <h3>type: </h3>
                            {job.type}
                        </li>


                        <li>
                            <h3>status: </h3>
                            {job.status}
                        </li>

                        <li>
                            <h3>experience: </h3>
                            {job.experience}
                        </li>

                        <li>
                            <h3>stipend/package: </h3>
                            {job.salary}
                        </li>
                    </ul>
                </div>

                {/* Section 2- Detailed Job Description*/}
                <div className='sectionJobSpeci responsibility_section'>
                    <h2>Key Responsibilities</h2>
                    <p>{job.description}</p>
                </div>


                {/* Section 3- Skills Requirement */}
                <div className='sectionJobSpeci skill_section'>
                    <h1 style={{fontSize:'1.5em'}}>Skills Requirement</h1>
                    <ul>
                       <li>{job.skills}</li>
                    </ul>
                </div>

                <div className="applyBtnWrapper">
                    <a href={job.url} target='_blank'>
                        <button className='applyBtnSinglePage'>Apply</button>
                    </a>
                </div>
            </div>
            }
        </div>
    )
}

export default JobPage