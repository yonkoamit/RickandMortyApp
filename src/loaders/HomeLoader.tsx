import {  Toolbar } from "@material-ui/core"
import ContentLoader from "react-content-loader"

function HomeLoader() {

  const myArray=Array.apply(null,Array(8)).map((x,i)=> {return i});
  return (
    <>
    <Toolbar/>
    <div className='loading'>
    <ContentLoader viewBox="0 0 1200 1200">
      <rect x="0" y="22" rx="0" ry="0" width="170" height="38"/>
      <rect x="0" y="77" rx="0" ry="0" width="1200" height="320" />
      <rect x="30" y="427" width="113" height="36" />
      <rect x="941" y="427" width="229" height="36" />
      {/* <rect x="30" y="487" width="272" height="292" />
      <rect x="312" y="487" width="272" height="292" />
      <rect x="594" y="487" width="272" height="292" />
      <rect x="886" y="487" width="272" height="292" /> */}
      </ContentLoader>
      <div className="episodeList">
      {myArray.map(()=>(
      <ContentLoader className="episode">
      <rect x="0" y="0" width="272" height="292" />
      </ContentLoader>))
      }
      </div>
      <div className="episodeList">
      {myArray.map(()=>(
      <ContentLoader className="episode">
      <rect x="0" y="0" width="272" height="292" />
      </ContentLoader>))
      }
      </div>
    
    </div>
    </>
  )
}

export default HomeLoader
