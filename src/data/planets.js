import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';
import TerraImg from '../images/Terra.png';
import MarteImg from '../images/Marte.png';
import JupiterImg from '../images/Jupiter.png';
import SaturnoImg from '../images/Saturno.png';
import Uranoimg from '../images/Urano.png';
import Netunoimg from '../images/Netuno.png';

const Planets = [
  { name: 'Mercúrio',
    image: MercurioImg,
    size: {
      with: 31,
      height: 45,
    } },
  { name: 'Vênus',
    image: VenusImg,
    size: {
      with: 76,
      height: 102,
    } },
  { name: 'Terra',
    image: TerraImg,
    size: {
      with: 79,
      height: 106,
    } },
  { name: 'Marte',
    image: MarteImg,
    size: {
      with: 50,
      height: 66,
    } },
  { name: 'Júpiter',
    image: JupiterImg,
    size: {
      with: 204,
      height: 272,
    } },
  { name: 'Saturno',
    image: SaturnoImg,
    size: {
      with: 211,
      height: 282,
    } },
  { name: 'Urano',
    image: Uranoimg,
    size: {
      with: 189,
      height: 144,
    } },
  { name: 'Netuno',
    image: Netunoimg,
    size: {
      with: 107,
      height: 144,
    } },
];

export default Planets;
