import styles from '@/styles/ErrorFallback.module.css'
import Link from 'next/link';
export function ErrorFallback({ url }: { url: string }) {
    return (
      <div className={styles.box}>
        <label className={styles.boxLabel}>
          <Link  href={url}>
            {url}
          </Link>
        </label>
      </div>
    );
  }