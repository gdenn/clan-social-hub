import type { NextPage } from 'next'
import Image from 'next/image'
import { ReactNode } from 'react';

import Layout from '../components/layout/Layout'

import styles from '../styles/Home.module.scss'

interface CardProps {
  children: ReactNode
}

interface CardImageProps {
  alt?: string
  src: string
}

interface TextPosting {
  title: string
  description: string
}

interface ImagePosting {
  title: string
  alt?: string
  src: string
}

type Post = TextPosting
  | ImagePosting

type NewsFeed = Post[]

const Card = ({ children }: CardProps) => (
  <div className={styles.card}>
    {children}
  </div>
)

const CardImage = ({alt, src}: CardImageProps) => (
  <div className={styles.cardImage}>
    <Image alt={alt ? alt : "undefined"} src={src} layout="fill" objectFit="contain" />
  </div>
);

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

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.cardView}>
        {newsFeed.map((post, idx) => (
          <Card key={"foo"}>
            <h2>{post.title}</h2>
            {"description" in post && <p>{post.description}</p>}
            {"alt" in post && "src" in post && <CardImage alt={post.alt} src={post.src} />}
          </Card>
        ))}
      </div>
    </Layout>
  );
}




export default Home
