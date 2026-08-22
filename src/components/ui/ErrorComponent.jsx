import { Link } from 'react-router';

const ErrorComponent = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="text-2xl mt-4">Page Not Found</p>

      <p className="text-gray-500 mt-2">The page does not exist.</p>

      <Link to="/" className="btn btn-primary mt-6">
        Go To Homepage
      </Link>
    </div>
        </div>
    );
};

export default ErrorComponent;