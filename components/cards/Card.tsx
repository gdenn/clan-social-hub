import React, { ReactNode } from 'react'

import styles from './Card.module.scss';

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
        {children}
    </div>
)