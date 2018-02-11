import React,{Component} from 'react'

import Data from '../data/Projects'

import './styles/Project.css'

export default class Project extends Component {
    componentDidMount() {
        const navlink = document.querySelectorAll('.nav-bar>a');
        navlink.forEach(link => link.classList.remove('active'))
        navlink[2].classList.add('active');
    }
    render() {
        return (
            <div className="project">
                {Data.map(proj => {
                    // create projects cards
                    const {project, link, img, description} = proj
                    
                    return (
                        <a href={link} target="_blank" key={project} className="project-card">
                            <h4>{project}</h4>
                            <p>{description}</p>
                            <img src={img} alt="images"/>
                        </a>
                    )
                })}
            </div>
        )
    }
}