import React, {useEffect, useState} from 'react';
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import ProfileHero from '../../src/components/profile/ProfileHero';
import ProfileUser from '../../src/components/profile/ProfileUser';
import ProfileCollection from '../../src/components/profile/ProfileCollection';
import profileData from '../../data/profile.json'

export default function index() {

    const [profile, setProfile] = useState([])

    useEffect(() => {
       setProfile(profileData)
    }, [])

    return (
        <div>
            <Header />
            <ProfileHero />
            <ProfileUser />
            <ProfileCollection />
            <Footer />
        </div>
    )
}



// There must be a <Header> component in pages/profile/[id].jsx
// There must be a <ProfileHero> component in pages/profile/[id].jsx
// There must be a <ProfileUser> component in pages/profile/[id].jsx
// There must be a <ProfileCollection> component in pages/profile/[id].jsx
// There must be a <Footer> component in pages/profile/[id].jsx
// The profile.json file must be imported in the pages/profile/[id].jsx and not in any components