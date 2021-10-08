import '../styles/episode.css';

const Episode = ({episodeName, episodeCurrent}) => {

  return(
    <>
      <p className="name">{episodeName}</p>
      <p className="episode">{episodeCurrent}</p>
    </>
  )
}


export default Episode
