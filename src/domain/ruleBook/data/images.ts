import safetyCarImg from '@domain/ruleBook/img/safetyCar.png';
import blackFlag from '@domain/ruleBook/img/blackFlag.jpg';
import blueFlag from '@domain/ruleBook/img/blueFlag.jpg';
import greenFlag from '@domain/ruleBook/img/greenFlag.jpg';
import redFlag from '@domain/ruleBook/img/redFlag.jpg';
import yellowFlag from '@domain/ruleBook/img/yellowFlag.avif';
import virtualSafetyCar from '@domain/ruleBook/img/virtualSafetyCar.jpeg';
import chequered_flag from '@domain/ruleBook/img/chequered_flag.avif';

export const RuleBookImages = {
  safetyCar: safetyCarImg,
  blackFlag: blackFlag,
  blueFlag: blueFlag,
  greenFlag: greenFlag,
  redFlag: redFlag,
  virtualSafetyCar: virtualSafetyCar,
  chequered_flag: chequered_flag,
  yellowFlag: yellowFlag,
} as const;

export type RuleBookImageKey = keyof typeof RuleBookImages;
