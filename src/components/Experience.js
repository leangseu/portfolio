import React, {Component} from 'react'
import './styles/Experience.css'

import Experiences from '../data/Experiences'
import Education from '../data/Education'

export default class Resume extends Component {
    componentDidMount() {
        const navlink = document.querySelectorAll('.nav-bar>a');
        navlink.forEach(link => link.classList.remove('active'))
        navlink[1].classList.add('active');
    }

    experiencesGen() {
        return <div className='experience'>
            <h3>{Experiences.title}</h3>
            {Experiences.data.map(job => {
                let buffer = []
                const {company, title, date, location, responsibilities} = job
                buffer.push(<h3 key={company} className="company">{company}</h3>)
                buffer.push(<h4 key={title} className="title">{title}</h4>)
                buffer.push(<p key="location" className="location">{location}</p>)
                buffer.push(<p key="date" className="date">{date}</p>)
                buffer.push(<ul key="responsibilities">{responsibilities.map((res, index) => {
                    return <li key={index}>{res}</li>
                })}</ul>)
                return buffer
            })}
        </div>
    }

    educationGen() {
        return (
            <div className="education">
                <h3>{Education.title}</h3>
                {
                    Education.data.map(edu => {
                        let buffer = [];
                        const {school, degree, graduated, major, minor, gpa} = edu;
                        buffer.push(<h5 key={school}>{school}</h5>)
                        buffer.push(<p key={degree}>{degree}<span className="date">{graduated}</span></p>)
                        buffer.push(<p key={major}>Major :{major}</p>)
                        buffer.push(<p key={minor}>Minor: {minor}</p>)
                        buffer.push(<p key={gpa}>GPA: {gpa}</p>)
                        return buffer
                    })
                }
            </div>
        )
    }

    render() {
        return (
            <div className="resume">
                {this.experiencesGen()}
                {this.educationGen()}
            </div>
        )
    }
}