import Image from 'next/image';
import React, { ReactNode } from 'react'

import styles from './Card.module.scss';
import { Profile } from './Profile';

interface VerticalCardViewProps {
    children: ReactNode
}

interface CardProps {
  children: ReactNode;
}

export const VerticalCardView = ({ children }: VerticalCardViewProps) => (
    <div className={styles.verticalCardView}>
        {children}
    </div>
)

export const Card = ({ children }: CardProps) => (
  <div className={styles.card}>
    <Card.Profile
      picture={{ src: "/profile1.jpg", alt: "myprofile" }}
      name="Max Mustermann"
      gamertag="the-gamer-one"
      description="Playing TF2 & Dota 4 fun"
      postedAt="2 Days ago"
    />
    <div className={styles.picture}>
      <Image
        src="/test.jpeg"
        alt="test"
        width="100%"
        height="200px"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className={styles.text}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et laudantium
        rem corrupti fugit perferendis deserunt.
      </p>
      <p>
        Lorem ipsum, dolor.
      </p>
      <p>
        Et laudantium
        rem corrupti fugit perferendis deserunt.
      </p>
    </div>
  </div>
);

Card.Profile = Profile;