import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="basis-1/3">
      <h1 className="text-4xl font-bold font-leckerli">
        <span className="text-primary">RIDE</span>X
      </h1>
    </Link>
  );
}
