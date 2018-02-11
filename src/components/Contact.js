import React, { Component } from 'react';
import ProfilePic from '../images/profile.jpg'

import './styles/Contact.css'

import Profile from '../data/Profile'

export default class Contact extends Component {
    componentDidMount() {
        const profile = document.querySelector('.profile');
        setTimeout(() => {
            profile.classList.add('visible');
        }, 200);

        const navlink = document.querySelectorAll('.nav-bar>a');
        navlink.forEach(link => link.classList.remove('active'))
        navlink[3].classList.add('active');
    }

    contactGen() {
        return (
            <div className="contact">
                <h2>{Profile.name}</h2>
                <span><a href={'callto:'+Profile.phone} title={"Call to " + Profile.phone}>{Profile.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1)-$2-$3")}</a></span> 
                <span><a target="_top" href={'mailto:'+Profile.email} title={"Email to " + Profile.phone}>{Profile.email}</a></span>
                <span><a href={Profile.addressURL} target='_blank' title={"Go to google map"}>{Profile.address}</a></span>
                <br/>
                <div className="social-link">
                {Profile.links.map(link => {
                    return <a target='_blank' key={link.site} href={link.url}><img src={link.icon} alt={link.site} title={link.url}/></a>
                })}
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="about">
                <div className="profile">
                    <img src={ProfilePic} alt="profile"/>
                </div>
                {this.contactGen()}
            </div>
        )
    }
}

// <form className='message-form'>
//                     <label htmlFor="name">Name</label>
//                     <input type="text"/>
//                     <label htmlFor="email">Email</label>
//                     <input type="text"/>
//                     <label htmlFor="message">Message</label>
//                     <textarea name="message" id="message" cols="30" rows="15"></textarea>
//                     <button type="submit">Send</button>
//                 </form>