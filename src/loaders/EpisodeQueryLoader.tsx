import ContentLoader from "react-content-loader";

function EpisodeQueryLoader() {
  const myArray=Array.apply(null,Array(20)).map((x,i)=> {return i});
  return (
    <>
    <div className="episodeList">
      {myArray.map(()=>(
      <ContentLoader className="episode">
      <rect x="0" y="0" width="270" height="290" />
      </ContentLoader>))
      }
      </div>
    </>
  )
}

export default EpisodeQueryLoader