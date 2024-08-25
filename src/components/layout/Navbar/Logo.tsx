import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/">
      <h1 className="text-4xl font-bold font-bebas">
        <span className="text-primary">BIKE</span>LAGBE
      </h1>
    </Link>
  );
}
