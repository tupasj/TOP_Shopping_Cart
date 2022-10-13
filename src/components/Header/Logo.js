import { Link } from "react-router-dom";

const Logo = (props) => {
  const setType = props.setType;

  const handleClick = () => {
    setType('all');
  }

  return (
    <Link to="/index" onClick={handleClick}>
      <div className="logo">
        <span className="logo__text">
          <span className="logo__text--red">L</span>orem{" "}
          <span className="logo__text--white">I</span>psum
        </span>
        <span className="logo__text--center">Clothing</span>
      </div>
    </Link>
  );
};

export { Logo };