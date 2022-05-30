import React from 'react'

import styles from './NewsFeed.module.scss'
import { Card, VerticalCardView } from '../cards/Card';

interface CardImageProps {
  alt?: string;
  src: string;
}

interface TextPosting {
  title: string;
  description: string;
}

interface ImagePosting {
  title: string;
  alt?: string;
  src: string;
}

type Post = TextPosting | ImagePosting;

type NewsFeed = Post[];

const newsFeed: NewsFeed = [
  {
    title: "New Warzone Season",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident explicabo neque rem tenetur quisquam consequatur autem atque perspiciatis quasi natus voluptatibus,doloremque quam nesciunt omnis, veniam porro? Laboriosam, ducimus.",
  },
  {
    title: "New Warzone Season",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident explicabo neque rem tenetur quisquam consequatur autem atque perspiciatis quasi natus voluptatibus,doloremque quam nesciunt omnis, veniam porro? Laboriosam, ducimus.",
  },
  {
    title: "New Warzone Season",
    alt: "warzone",
    src: "/test.jpeg",
  },
];

export const NewsFeed = () => (
  <section className={styles.newsfeed}>
    <div className={styles.cardView}>
      <VerticalCardView>
        <Card>
          {/* <Card.Profile
            picture={{ src: "/profile1.jpg", alt: "myprofile" }}
            name="Max Mustermann"
            gamertag="the-gamer-one"
            description="Playing TF2 & Dota 4 fun"
            postedAt="2 Days ago"
          /> */}
        </Card>
      </VerticalCardView>
    </div>
  </section>
);