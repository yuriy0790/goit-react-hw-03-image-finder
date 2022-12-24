import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import { Puff } from 'react-loader-spinner';

class Modal extends Component {
  state = {
    showSpinner: true,
  };

  componentDidMount() {
    document.addEventListener('keydown', () => this.props.onImgClick(''));
    // this.setState({ showSpinner: false });
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
        {this.state.showSpinner && (
          <Puff
            height="80"
            width="80"
            radius={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
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
