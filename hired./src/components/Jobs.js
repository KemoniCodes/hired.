import React from 'react'
import axios from 'axios'
import '../css/Jobs.css'
import Nav from './Nav';
// import '../css/App.css'

class Jobs extends React.Component {
    constructor() {
        super();
        this.state = {
            jobs: []
        }
    }

    componentDidMount = () => {
        axios.get('/jobs').then(response => {
            this.setState({
                jobs: response.data.jobs
            });
        });


    };

    render() {

        return (

            <div className="Jobs">
                <Nav />


                {this.state.jobs.map((job, i) => {
                    return (

                        <div key={job.id} className="job-card">
                            <ul>
                                <li>
                                    <span className="titles" id='title'>
                                        {job.title}
                                    </span>

                                </li>
                                {/* <li>Description:</li>
                                <li>{job.description}</li> */}
                                <li>
                                    <span className="titles" id='company'>
                                        {job.company}
                                    </span>
                                    ({job.job_type})
                                </li>

                                <li>
                                    <span className="titles">
                                        Location:
                                    </span>
                                    {job.location === undefined ? 'Remote' : job.location}
                                </li>

                                <li>
                                    <span className="titles" id='company'>
                                        Applicants:
                                    </span>
                                    {job.applicant_count}
                                </li>
                                <li>
                                    <span className="titles">
                                        Skills:
                                    </span>
                                </li>
                                <li className='skills'>{job.skills_tag.map((skill, i) =>
                                    <li key={i}>
                                        {skill}
                                    </li>
                                )}
                                </li>
                                <li>
                                    <button>Apply</button>
                                </li>
                            </ul>
                        </div>
                    )
                }
                )
                }
            </div>
        )

    }
}

export default Jobs