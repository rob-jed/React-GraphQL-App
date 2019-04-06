import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
    user: PropTypes.shape({
        login: PropTypes.string,
        avatarUrl: PropTypes.string,
        name: PropTypes.string,
        company: PropTypes.string,
    }).isRequired,
};

const UserCard = ({
    user: {
        login,
        avatarUrl,
        name,
        company,
    }
}) => (
    <li className="user-card">
        <Link to={login}>
            <div className="user-card-avatar">
                <img src={avatarUrl} alt={name} />
            </div>

            <div className="user-card-info">
                <h3 className="user-card-login">
                    <span>Login:</span>
                    &nbsp;
                    { login }
                </h3>

                <h3 className="user-card-name">
                    <span>Name:</span>
                    &nbsp;
                    { name }
                </h3>

                <h3 className="user-card-company">
                    <span>Company:</span>
                    &nbsp;
                    { company }
                </h3>
            </div>
        </Link>
    </li>
);

UserCard.propTypes = propTypes;

export default UserCard;
