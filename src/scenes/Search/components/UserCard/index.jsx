import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from 'components/Avatar';

import './styles.scss';

const propTypes = {
    user: PropTypes.shape({
        login: PropTypes.string,
        avatarUrl: PropTypes.string,
        name: PropTypes.string,
        company: PropTypes.string,
        location: PropTypes.string,
    }).isRequired,
};

const UserCard = ({
    user: {
        login,
        avatarUrl,
        name,
        company,
        location,
    }
}) => (
    <li className="user-card">
        <Link to={`user/${login}`} className="user-card-inner">
            <Avatar url={avatarUrl} alt={name} />

            <div className="user-card-info">
                {
                    name
                        && (
                            <h3>
                                Name: &nbsp;
                                <span>{ name }</span>
                            </h3>
                        )
                }

                <h3>
                    Login: &nbsp;
                    <span>{ login }</span>
                </h3>

                {
                    company
                        && (
                            <h3>
                                Company: &nbsp;
                                <span>{ company }</span>
                            </h3>
                        )
                }

                {
                    location
                        && (
                            <h3>
                                Location: &nbsp;
                                <span>{ location }</span>
                            </h3>
                        )
                }
            </div>
        </Link>
    </li>
);

UserCard.propTypes = propTypes;

export default UserCard;
