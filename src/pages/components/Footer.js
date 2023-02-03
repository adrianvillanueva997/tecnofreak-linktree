/* eslint-disable @next/next/no-img-element */
import styles from './Footer.module.css';
export default function Footer() {
  return (
    <div className="text-center">
      <div className={styles.footer}>
        created by
        <p>
          <a
            className={styles.urls}
            target=""
            href="https://adrianvillanueva.com"
          >
            Adrián Villanueva
          </a>
        </p>
      </div>
    </div>
  );
}
