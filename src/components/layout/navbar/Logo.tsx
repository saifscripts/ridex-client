import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/">
      <h1 className="text-4xl font-bold font-bebas">
        <span className="text-primary">RIDE</span>X
      </h1>
    </Link>
  );
}
