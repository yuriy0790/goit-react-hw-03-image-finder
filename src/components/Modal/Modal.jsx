import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import Spinner from 'react-spinner-material';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', () => this.props.onImgClick(''));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', () => this.props.onImgClick(''));
  }

  onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onImgClick('');
    }
  };

  render() {
    return (
      <div className={styles.Overlay} onClick={this.onBackdropClick}>
        <Spinner radius={80} color={'tomato'} stroke={6} visible={true} />
        <div className={styles.Modal}>
          <img src={this.props.largeImageURL} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
