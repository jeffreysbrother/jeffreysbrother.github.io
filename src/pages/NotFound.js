import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="not-found">
        <h1>Page Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
        <Link to="/">Go back home</Link>
    </div>
)

export default NotFound;