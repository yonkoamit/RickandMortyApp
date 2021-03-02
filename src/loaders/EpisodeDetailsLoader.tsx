import { Toolbar } from '@material-ui/core'
import React from 'react'
import ContentLoader from 'react-content-loader'
import EpisodeAtTopLoader from './EpisodeAtTopLoader'

function EpisodeDetailsLoader() {

  const myArray=Array.apply(null,Array(30)).map((x,i)=> {return i});
  return (
    <>
    <Toolbar/>
    <div className="episodeDetails">
        <EpisodeAtTopLoader/>
        <h1>
          <ContentLoader>
            <rect x="0" y="0" width="200" height="38"/>
          </ContentLoader>
          <div className='starringList'>
              {myArray.map(()=>(
                <ContentLoader  className="starring" width="184" height="241">
                <rect x="0" y="0" width="184" height="241" />
                </ContentLoader>))
              }
            </div>  
        </h1>   
    </div>
    </>
  )
}

export default EpisodeDetailsLoader
