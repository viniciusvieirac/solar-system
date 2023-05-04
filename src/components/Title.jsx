import React from 'react';
import PropTypes from 'prop-types';
import { TitleStyled } from '../styles/Title';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <TitleStyled>
        { headline }
      </TitleStyled>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
