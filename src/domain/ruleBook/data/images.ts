import safetyCarImg from '@domain/ruleBook/img/safetyCar.png';

export const RuleBookImages = {
  safetyCar: safetyCarImg,
} as const;

export type RuleBookImageKey = keyof typeof RuleBookImages;
