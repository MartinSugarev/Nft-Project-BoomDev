import React, {useEffect, useState} from 'react';
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import ProfileHero from '../../src/components/profile/ProfileHero';
import ProfileUser from '../../src/components/profile/ProfileUser';
import ProfileCollection from '../../src/components/profile/ProfileCollection';
import profileData from '../../data/profile.json'

export default function Profile() {

    const [profile, setProfile] = useState([])

    useEffect(() => {
       setProfile(profileData)
    }, [])

    return (
        <>
            <Header />
            <ProfileHero />
            <ProfileUser />
            <ProfileCollection />
            <Footer />
        </>
    )
}