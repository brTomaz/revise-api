import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import favicon from '../../favicon.png';

const PageTitle = () => (
  <Helmet title="Revise | Consolide o seu conhecimento" link={[{ rel: 'icon', type: 'image/png', href: favicon }]} />
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(PageTitle);
