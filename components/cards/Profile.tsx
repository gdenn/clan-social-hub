import Image from 'next/image';
import React from 'react'

import styles from './Profile.module.scss'

interface Picture {
  src: string;
  alt?: string;
}

interface ProfileProps {
  picture: Picture;
  name: string;
  gamertag: string;
  description: string;
  postedAt: string;
}

export const Profile = ({
  picture,
  name,
  gamertag,
  description,
  postedAt,
}: ProfileProps) => (
  <div className={styles.profile}>
    <div className={styles.picture}>
      <Image
        src={picture.src}
        alt={picture.alt}
        width={75}
        height={75}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className={styles.meta}>
      <div className={styles.name}>{name}</div>
      <span className={styles.description}>
        <span className={styles.tag}>#{gamertag}</span>
        {description}
      </span>
      <span className={styles.subline}>{postedAt}</span>
    </div>
  </div>
);