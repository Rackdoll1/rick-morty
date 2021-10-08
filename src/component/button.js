import '../styles/button.css';

const Button = ({src, callback}) => {
  return(
    <>
      <img className="button-img" src={src} onClick={callback}></img>
    </>
  )
}

export default Button
