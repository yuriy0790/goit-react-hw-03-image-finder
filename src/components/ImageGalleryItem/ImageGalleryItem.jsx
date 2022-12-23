import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ smallImg, bigImg, alt, onImgClick }) => (
  <li className={styles.ImageGalleryItem}>
    <img className={styles.ImageGalleryItemImage} src={smallImg} alt={alt} />
  </li>
);
export default ImageGalleryItem;

// ImageGallery.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
