import Header from '../../src/components/header/Header';
import Hero from '../../src/components/hero/Hero';
import ActivityFilters from '../../src/components/activity/ActivityFilters'
import ActivityList from '../../src/components/activity/ActivityList'
import Footer from '../../src/components/footer/Footer';
import activityData from '../../data/activity.json'


import React, {useEffect, useState} from 'react'

export default function index() {


    const [activity, setActivity] = useState()

    useEffect(() => {
        setActivity(activityData)
    }, [])

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Header />
            <Hero text={'Activity'} />
            <div style={{width: '60%', position: 'relative', top: '-75px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <ActivityFilters />
               <ActivityList  items={activity}/>
            </div>
            <Footer />
        </div>
    )
}
