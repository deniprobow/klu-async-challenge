import styles from '@/styles/UrlLinkPreview.module.css'
import Link from 'next/link';

export function UrlLinkPreview({
    url,
    urlData,
  }: {
    url: string;
    urlData: any;
  }){
    return(
        <div className={styles.cardPreview}>
            {urlData?.imageSrc && (
                <div  className={styles.imgCardPreviewWrapper} >
                    <img src={urlData.imageSrc} alt="Website preview" loading="lazy"/>
                </div>
            )}
            <div className={styles.titleDescriptionWrapper}
            style={ urlData.imageSrc ? {width: "66%"} : {width:"100%"}}
            >
            {urlData.title && (
                <label className={styles.labelTitle}>
                    {urlData.title}
                </label>
            )}
            {urlData.description && (
                <label className={styles.labelDescription}
                >
                {urlData.description}
                </label>
            )}

            <div className={styles.iconWrapperFlex}>
                {urlData.favicon && (
                <img
                    src={urlData.favicon}
                    width={16}
                    height={16}
                    style={{objectFit:'cover'}}
                    alt="Website icon"
                />
                )}
                <label className={styles.labelUrl} >
                <Link target='_blank' href={`${url}`} >
                    {url}
                </Link>
                </label>
            </div>
            </div>
        </div>
    )
}