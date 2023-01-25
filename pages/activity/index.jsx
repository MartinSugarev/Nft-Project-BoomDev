import Header from '../../src/components/header/Header';
import Hero from '../../src/components/hero/Hero';
import ActivityFilters from '../../src/components/activity/ActivityFilters'
import ActivityList from '../../src/components/activity/ActivityList'
import Footer from '../../src/components/footer/Footer';
import React, {useEffect, useState} from 'react'

export default function Index() {


    const [activity, setActivity] = useState()
    const [activityFilters, setActivityFilters] = useState([])
    const [sort, setSort] = useState([])
    const [type, setType] = useState([])

    useEffect(async () => {

      try {
        const result = await fetch(`https://project-4-api.boom.dev/activities`)
        const response =  await result.json()  
        
        setActivity(response.activities)
        setActivityFilters(response.filters)
      } catch (error) {
        throw(error)
      }

      }, []);

      useEffect(async () => {
        try {
          const result = await fetch(`https://project-4-api.boom.dev/activities?sort=${sort}`)
          const response =  await result.json()
          setActivity(response.nfts)
        } catch (error) {
          throw(error)
        }

      }, [sort])
  
      useEffect(async () => {
        try {
          const result = await fetch(`https://project-4-api.boom.dev/activities?type=${type}`)
          const response =  await result.json()
          setActivity(response.nfts)
        } catch (error) {
          throw(error)
        }

      }, [type])

      const handleTypeChange = (event) => {
        setSort(event.target.value);
    }
    const handleSortByChange = (event) => {
        setType(event.target.value);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Header />
            <Hero text={'Activity'} />
            <div style={{width: '60%', position: 'relative', top: '-95px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
              <ActivityFilters  filters={activityFilters} handleTypeChange={handleTypeChange} handleSortByChange={handleSortByChange}/>
               <ActivityList  items={activity}/>
            </div>
            <Footer />
        </div>
    )
}
