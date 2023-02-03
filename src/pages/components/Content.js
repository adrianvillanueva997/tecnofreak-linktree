/* eslint-disable @next/next/no-img-element */
import {
  faBandcamp,
  faTelegram,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Content.module.css';
const listClasses = [styles.link, 'btn', 'btn-outline-light', 'shake'].join(
  ' '
);
export default function Content() {
  return (
    <div className="container">
      <div className="text-center">
        <div>
          <button type="button" className={listClasses}>
            <a href="https://tecnofreak.net" className={styles.urls}>
              <FontAwesomeIcon icon={faWordpress} className={styles.urls} />{' '}
              Tecnofreak
            </a>
          </button>
        </div>
        <div>
          <button type="button" className={listClasses}>
            <a href="https://tecnofreak.net" className={styles.urls}>
              <FontAwesomeIcon icon={faTelegram} className={styles.urls} />{' '}
              Telegram music stuff
            </a>
          </button>
        </div>
        <div>
          <button type="button" className={listClasses}>
            <a href="https://vxd-as.bandcamp.com/" className={styles.urls}>
              <FontAwesomeIcon icon={faBandcamp} className={styles.urls} />{' '}
              Bandcamp
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
