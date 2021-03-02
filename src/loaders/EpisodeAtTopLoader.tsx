import ContentLoader from "react-content-loader"

const EpisodeAtTopLoader = () => {
  return (
    <div >
        <ContentLoader className='loading' viewBox="0 0 1200 1200">
        <rect x="0" y="0" rx="0" ry="0" width="1200" height="320" />
        </ContentLoader>
    </div>)
}

export default EpisodeAtTopLoader
