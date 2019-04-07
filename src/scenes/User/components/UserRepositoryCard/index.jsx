import React from 'react';
import PropTypes from 'prop-types';

import { addProtocolIfMissing } from 'services/URLs';

import './styles.scss';

const propTypes = {
    repository: PropTypes.shape({
        description: PropTypes.string,
        homepageUrl: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
    }).isRequired,
};

const UserRepositoryCard = ({
    repository: {
        description,
        homepageUrl,
        name,
        url,
    }
}) => (
    <li className="user-repository-card">
        <h2>{name}</h2>
        <p>{description}</p>

        <div className="user-repository-links">
            <a href={url} target="_blank" rel="noopener noreferrer">
                View on GitHub
            </a>

            {
                homepageUrl
                    && (
                        <a
                            href={addProtocolIfMissing(homepageUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View homepage
                        </a>
                    )
            }
        </div>
    </li>
);

UserRepositoryCard.propTypes = propTypes;

export default React.memo(UserRepositoryCard);
