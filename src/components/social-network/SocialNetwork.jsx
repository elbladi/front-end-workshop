import React from 'react';
import PropTypes from 'prop-types';

const SocialNetwork = ({ url, icon, site}) => (
    <a href={url}>
        <span
            data-icon={`ei-sc-${icon}`}
            data-size="m"
        />
        <span className="yta_u-onlyRead">{site}</span>
    </a>
);

SocialNetwork.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
};

export default SocialNetwork;