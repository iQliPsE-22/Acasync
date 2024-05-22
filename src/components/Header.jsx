import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="julius flex items-center justify-center bg-white w-screen min-h-fit h-16 ">
      <Link to="/">
        <h2 className="text-3xl text-center">AcaSync</h2>
      </Link>
    </div>
  );
};
export default Header;
