/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from './Header.module.css';
export default function Header() {
  return (
    <div className="col-xs-12">
      <div className="text-center">
        <img className="backdrop linktree" />
        <h2 className={styles.h2}>Tecnofreak</h2>
      </div>
    </div>
  );
}
