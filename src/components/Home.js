import React, {Component} from 'react'
import ProfilePic from '../images/profile.jpg'

import './styles/Home.css'

import Skills from '../data/Skills'

export default class Resume extends Component {

    componentDidMount() {
        const profile = document.querySelector('.profile');
        setTimeout(() => {
            profile.classList.add('visible');
        }, 200);

        const navlink = document.querySelectorAll('.nav-bar>a');
        navlink.forEach(link => link.classList.remove('active'))
        navlink[0].classList.add('active');
    }

    skillGen() {
        return (
            <div className="skill">
                {
                    Skills.data.map(data => {
                        let buffer = []
                        buffer.push(<h4 key={data.type}>{data.type}</h4>)
                        buffer.push(<div key='languages' className='languages'>{
                            data.list.map(language => {
                            return <img key={language.name} src={language.icon} title={language.name} alt={language.name}/>
                        })}</div>)
                        return buffer
                    })
                }
            </div>
        )
    }

    render() {
        return (
            <div className="home">
                <div className="profile">
                    <img src={ProfilePic} alt="profile"/>
                    <h2>Leangseu Kim</h2>
                    <p>Undergraduate Student at University of Massachusetts Lowell</p>
                </div>
                {this.skillGen()}
            </div>
        )
    }
}