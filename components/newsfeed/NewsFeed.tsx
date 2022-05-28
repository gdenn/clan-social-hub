import React from 'react'
import Image from "next/image";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsUp,
  faComment,
} from "@fortawesome/free-regular-svg-icons";

import styles from './NewsFeed.module.scss'

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
        <div className={styles.card}>
            <div className={styles.author}></div>
            <div className={styles.content}></div>
            <div className={styles.reactions}></div>
            <div className={styles.actions}></div>
        </div>
    </div>
  </section>
);