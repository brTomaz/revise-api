import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from '../../../assets/images/white-logo.svg';

const Wrapper = styled.div`
  background-color: ${props => props.theme.main.colors.revise.mainBg};
  height: ${props => props.theme.main.sizes.leftMenu.height};
  color: red;

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }

  .projectName {
    display: block;
    height: ${props => props.theme.main.sizes.leftMenu.height};
    background-position: center center;
    background-size: 10rem;
    background-image: url(${Logo});
    background-repeat: no-repeat;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
