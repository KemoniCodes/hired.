import React from 'react'
import axios from 'axios'
// import { title } from 'process'

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
        // if ({ applicants } is <= 5 ) {
        //     return ('Less than 5')
        // } else({{ applicants } is > 5) {
        //     return ({ applicants })
        // }
        return (
            <div className="Jobs">

                {this.state.jobs.map((job, i) => {
                    return (
                        <div className="job-card">
                            <ul>
                                <li>Job title:</li>
                                <li>{job.title}</li>
                                <li>Description:</li>
                                <li>{job.description}</li>
                                <li>Location: {job.location}</li>
                                <li>Company: {job.company}</li>
                                <li>Job type: {job.job_type}</li>
                                <li>Applicants: {job.applicant_count}</li>
                                <li>Skills:</li>
                                <li>{job.skills_tag}</li>
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