import { Link, Outlet } from 'react-router-dom';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navigation = () => {
    return (
        <nav>
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/brand-new">Brand new</Link>
            <Link className="nav__anchor--red" to="/on-sale">On Sale</Link>
            <Outlet />
        </nav>
    );
};

export { Navigation };
