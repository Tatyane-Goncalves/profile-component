import styles from "../Perfil/Perfil.module.scss"

const LoadingSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.avatarWrapper}>
        <div className={styles.skeletonCircle}></div>
      </div>
      <div className={styles.skeletonLine} style={{ width: '60%', height: '1.5rem' }}></div>
      <div className={styles.skeletonLine} style={{ width: '80%', height: '1re,' }}></div>
      <div className={styles.skeletonLine} style={{ width: '90%', height: '0.875rem' }}></div>
      <div className={styles.skeletonLine} style={{ width: '90%', height: '0.875rem' }}></div>
      <div className={styles.acoes}>
        <div className={`${styles.skeletonButton} $${styles.shimmer}`}></div>
        <div className={`${styles.skeletonButton} $${styles.shimmer}`}></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
