import Header from '../../src/components/header/Header';
import Hero from '../../src/components/hero/Hero';
import ActivityFilters from '../../src/components/activity/ActivityFilters'
import ActivityList from '../../src/components/activity/ActivityList'
import Footer from '../../src/components/footer/Footer';
import React, {useEffect, useState} from 'react'

export default function Index() {


    const [activity, setActivity] = useState()
    const [activityFilters, setActivityFilters] = useState([])

    useEffect(async () => {
        const result = await fetch(`https://project-4-api.boom.dev/activities`)
        const response =  await result.json()

        setActivity(response.activity)
        setActivityFilters(response.filters)
      }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Header />
            <Hero text={'Activity'} />
            <div style={{width: '60%', position: 'relative', top: '-75px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <ActivityFilters  filters={activityFilters}/>
               <ActivityList  items={activity}/>
            </div>
            <Footer />
        </div>
    )
}
