import Australia_circuit from '@shared/img/trackMaps/01_Australia_Circuit.avif';
import China_circuit from '@shared/img/trackMaps/02_China_Circuit.avif';
import Japan_circuit from '@shared/img/trackMaps/03_Japan_Circuit.avif';
import Bahrain_circuit from '@shared/img/trackMaps/04_Bahrain_Circuit.avif';
import Saudi_Arabia_circuit from '@shared/img/trackMaps/05_Saudi_Arabia_Circuit.avif';
import Miami_circuit from '@shared/img/trackMaps/06_Miami_Circuit.avif';
import Emila_Romagna_circuit from '@shared/img/trackMaps/07_Emilia_Romagna_Circuit.avif';
import Monaco_circuit from '@shared/img/trackMaps/08_Monaco_Circuit.avif';
import Spain_circuit from '@shared/img/trackMaps/09_Spain_Circuit.avif';
import Canada_circuit from '@shared/img/trackMaps/10_Canada_Circuit.avif';
import Austria_circuit from '@shared/img/trackMaps/11_Austria_Circuit.avif';
import Great_Britain_circuit from '@shared/img/trackMaps/12_Great_Britain_Circuit.avif';
import Belgium_circuit from '@shared/img/trackMaps/13_Belgium_Circuit.avif';
import Hungary_circuit from '@shared/img/trackMaps/14_Hungary_Circuit.avif';
import Netherlands_circuit from '@shared/img/trackMaps/15_Netherlands_Circuit.avif';
import Italy_circuit from '@shared/img/trackMaps/16_Italy_Circuit.avif';
import Baku_circuit from '@shared/img/trackMaps/17_Baku_Circuit.avif';
import Singapore_circuit from '@shared/img/trackMaps/18_Singapore_Circuit.avif';
import USA_circuit from '@shared/img/trackMaps/19_USA_Circuit.avif';
import Mexico_circuit from '@shared/img/trackMaps/20_Mexico_Circuit.avif';
import Brazil_circuit from '@shared/img/trackMaps/21_Brazil_Circuit.avif';
import Las_Vegas_circuit from '@shared/img/trackMaps/22_Las_Vegas_Circuit.avif';
import Qatar_circuit from '@shared/img/trackMaps/23_Qatar_Circuit.avif';
import Abu_Dhabi_circuit from '@shared/img/trackMaps/24_Abu_Dhabi_Circuit.avif';

export const circuitImages = {
  Australia_circuit,
  China_circuit,
  Japan_circuit,
  Bahrain_circuit,
  Saudi_Arabia_circuit,
  Miami_circuit,
  Emila_Romagna_circuit,
  Monaco_circuit,
  Spain_circuit,
  Canada_circuit,
  Austria_circuit,
  Great_Britain_circuit,
  Belgium_circuit,
  Hungary_circuit,
  Netherlands_circuit,
  Italy_circuit,
  Baku_circuit,
  Singapore_circuit,
  USA_circuit,
  Mexico_circuit,
  Brazil_circuit,
  Las_Vegas_circuit,
  Qatar_circuit,
  Abu_Dhabi_circuit,
} as const;

export type circuitImageKey = keyof typeof circuitImages;
