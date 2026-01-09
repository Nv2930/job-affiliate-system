import React, { useEffect, useState } from 'react'
import './admin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import JobPortal from './JobPortal';

function Dashboard() {
    const [jobArr, setJobArr] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            async function getJobs() {
                const response = await axios.get("http://localhost:8080/api/admin/jobs");
                setJobArr(response.data);
                setLoading(false);
            }
            getJobs();
        }, 700)
    }, [])

    console.log(jobArr);

    return (
        <>
            {
                loading == true ? <div className='emptyJobArr'>
                    <h1>Loading...</h1>
                </div> :

                    <div className="container">
                        <div id='c1' className='child'>
                            <h1 style={{ fontSize: '1.3em' }}>Admin Profile</h1>

                            {/* Sidebar */}
                            <div className='sidebar'>
                                <ul>

                                    <li>
                                        <Link to={'/admin/form'} className='iconURL'>
                                            <img className='icons' src="public/paper-plane.png" alt="add" />publish job
                                        </Link>
                                    </li>


                                    <li>
                                        <Link to={'/admin/jobs'} className='iconURL'>
                                            <img className='icons' src="public/share.png" alt="job list" />view jobs
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        {/*Dashboard Content- */}
                        <div id='c2' className='child'>
                            <div className='headingTBL'>
                                <h1>Dashboard</h1>
                                <p>view & manage users data</p>
                            </div>
                            <JobPortal />
                        </div>
                    </div>
            }
        </>
    )
}

export default Dashboard