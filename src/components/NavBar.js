import React, {Component} from 'react';
import './styles/NavBar.css';
import {Route,Link} from 'react-router-dom';

import Experience from './Experience'
import Project from './Project'
import Contact from './Contact'
import Home from './Home'

import Animation from './Animation'

export default class NavBar extends Component {

    componentDidMount() {
        const links = document.querySelectorAll('.nav-bar>a');
        const active = document.querySelector('.active');
        Animation.moveHovering(active.getClientRects()[0]);
        links.forEach(link => {link.addEventListener('mouseover', function() {
                const coords = this.getClientRects()[0];
                Animation.moveHovering(coords);
            });
            link.addEventListener('mouseleave', () => {
                Animation.moveHovering(document.querySelector('.active').getClientRects()[0]);
            })
        })
        window.addEventListener('resize', () => {
            Animation.moveHovering(document.querySelector('.active').getClientRects()[0]);
        })
    }

    render() {
        return <div className='container'>
            <div ref='ul' className='nav-bar'>
                <Link to="/">Home</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/project" component={Project}/>
                <Route path="/contact" component={Contact}/>
            </div>
            <span id="hovering"></span>
        </div>
    }
}
