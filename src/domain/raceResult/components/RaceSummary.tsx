import { assignInlineVars } from '@vanilla-extract/dynamic';
import { motion } from 'framer-motion';
import React from 'react';
import * as styles from '../styles/raceResult.css.ts';

export interface SummaryItem {
  label: string;
  value: string;
  variant: keyof typeof styles.summaryBadge;
  trend?: string;
}

interface RaceSummaryProps {
  items: SummaryItem[];
  accentColor: string;
}

export const RaceSummary = ({ items, accentColor }: RaceSummaryProps) => {
  return (
    <div className={styles.summaryGrid}>
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08, duration: 0.4, ease: 'easeOut' }}
          className={`${styles.summaryCard} ${styles.summaryBadge[item.variant]}`}
          style={assignInlineVars({ [styles.accentColorVar]: accentColor })}
        >
          <span className={styles.summaryLabel}>{item.label}</span>
          <span className={styles.summaryValue}>{item.value}</span>
          {item.trend ? (
            <span className={styles.summaryTrend}>{item.trend}</span>
          ) : null}
        </motion.div>
      ))}
    </div>
  );
};
