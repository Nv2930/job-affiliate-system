import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import { data, useNavigate } from 'react-router-dom';

function JobForm() {
  const [loading, setLoading] = useState(true);

  const [job, setJob] = useState({
    role: "",
    company: "",
    type: "",
    category: "",
    overview: "",
    description: "",
    skills: "",
    degree: "",
    experience: "",
    salary: "",
    location: "",
    status: "",
    url: ""
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700)
  }, [])

  const navigate=useNavigate();

  async function formListener() {
    try {
      const response=await axios.post("http://localhost:8080/api/admin/job", job);
      console.log(response);

      if(response.status==200){
        navigate('/success');
      }
    }
    catch (error) {
      console.log(error.status);
    }
  }

  return (
    <>
      {
        loading == true ? <div className='emptyJobArr'>
          <h1>Loading...</h1>
        </div>
          :
          <div className='jobContainer'>
            <h1 style={{ width: '100%', borderBottom: '2px solid lightgray', textAlign: 'center', fontSize: '1.8em', backgroundColor: 'white', padding: '0.3em' }}>Fill the Form & publish Job</h1>

            <form className='jobForm' action={"/api/admin/job"} method='post' onSubmit={(e) => {
              e.preventDefault();
              formListener();
              setJob({
                role: "",
                company: "",
                type: "",
                category: "",
                overview: "",
                description: "",
                skills: "",
                degree: "",
                experience: "",
                salary: "",
                location: "",
                status: "",
                url: ""
              });
            }}>

              <div className='fields_container_div'>
                <label htmlFor="j_role" className='label'>Job Role</label>

                <input className='input_field' name='role' type="text" value={job.role} id='j_role' required onChange={(e) => {
                  setJob({ ...job, role: e.currentTarget.value });
                }} />
              </div>

              <div className='fields_container_div'>
                <label htmlFor="j_company" className='label'>Company</label>
                <input className='input_field' name='company' type="text" value={job.company} id='j_company' required onChange={(e) => {
                  setJob({ ...job, company: e.currentTarget.value });
                }} />
              </div>

              {/* Dropdown List */}
              <div className='fields_container_div'>
                <label htmlFor="j_type" className='label'>Job Type:</label>

                <select className='dropdown' name="j_type" value={job.type} id="j_type" required onChange={(e) => {
                  setJob({ ...job, type: e.currentTarget.value });
                }}>
                  <option value="choice">-Choice-</option>
                  <option value="internship">Internship</option>
                  <option value="full-time">Full-time</option>
                  <option value="remote">Remote</option>
                  <option value="part-time">Part-time</option>
                </select>
              </div>


              <div className='fields_container_div'>
                <label htmlFor="j_category" className='label'>Category</label>

                <select className='dropdown' name="category" value={job.category} id="j_category" required onChange={(e) => {
                  setJob({ ...job, category: e.currentTarget.value });
                }}>
                  <option value="choice">-Choice-</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="full-stack">Full-stack</option>
                  <option value="dev-ops">Dev-ops</option>
                  <option value="testing">Testing</option>
                  <option value="data-analyst">Data Analyst</option>
                  <option value="data-science">Data Science</option>
                  <option value="data-db">Database</option>
                  <option value="mobile-application">Mobile Application</option>
                  <option value="ui_ux">UI/UX</option>
                  <option value="graphich-designing">Graphich Designing</option>
                  <option value="cloud">Cloud Technology</option>
                  <option value="other">other</option>
                </select>
              </div>

              <div className='fields_container_div'>
                <label htmlFor="j_overview" className='label'>Job Overview</label>
                <textarea className='textarea' name="overview" value={job.overview} id="j_overview" required onChange={(e) => {
                  setJob({ ...job, overview: e.currentTarget.value });
                }}></textarea>
              </div>

              <div className='fields_container_div'>
                <label htmlFor="j_description" className='label'>Job Description</label>
                <textarea className='textarea' name="description" value={job.description} id="j_description" required onChange={(e) => {
                  setJob({ ...job, description: e.currentTarget.value });
                }}></textarea>
              </div>

              <div className='fields_container_div'>
                <label htmlFor="j_skills" className='label'>Skills (separated by comma)</label>
                <textarea className='textarea' name="skills" value={job.skills} id="j_skills" required onChange={(e) => {
                  setJob({ ...job, skills: e.currentTarget.value });
                }}></textarea>
              </div>

              <div className='fields_container_div'>
                <label htmlFor="j_eligibility" className='label'>Degree (separated by comma)</label>
                <input type="text" className='input_field' name='degree' value={job.degree} id='j_eligibility' required onChange={(e) => {
                  setJob({ ...job, degree: e.currentTarget.value });
                }} />
              </div>

              <div className='fields_container_div'>
                <label htmlFor="j_experience" className='label'>Experience</label>
                <select className='dropdown' name="experience" value={job.experience} id="j_experience" required onChange={(e) => {
                  setJob({ ...job, experience: e.currentTarget.value });
                }}>
                  <option value="choice">-Choice-</option>
                  <option value="fresher">Fresher</option>
                  <option value="0-1">0-1 Years</option>
                  <option value="1-3">1-3 Years</option>
                  <option value="3+">3+ Years</option>
                </select>
              </div>

              <div className='fields_container_div'>
                <label htmlFor="j_salary" className='label'>Stipend/Salary (CTC)</label>
                <input className='input_field' name='salary' type="number" value={job.salary} id='j_salary' required onChange={(e) => {
                  setJob({ ...job, salary: e.currentTarget.value });
                }} />
              </div>

              <div className='fields_container_div'>
                <label htmlFor="j_location" className='label'>Location</label>
                <input className='input_field' name='location' type="text" value={job.location} id='j_location' required onChange={(e) => {
                  setJob({ ...job, location: e.currentTarget.value });
                }} />
              </div>

              <div className='fields_container_div'>
                <label htmlFor="j_status" className='label'>Job Status</label>

                <select className='dropdown' name="status" value={job.status} id="j_status" required onChange={(e) => {
                  setJob({ ...job, status: e.currentTarget.value });
                }}>
                  <option value="choice">-Choice-</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className='fields_container_div'>
                <label htmlFor="j_url" className='label'>Apply URL</label>
                <input className='input_field' name='url' type="text" value={job.url} id='j_url' required onChange={(e) => {
                  setJob({ ...job, url: e.currentTarget.value });
                }} />
              </div>

              <button type='submit' className='publishBtn'>publish</button>
            </form>
          </div>
      }
    </>
  )
}

export default JobForm