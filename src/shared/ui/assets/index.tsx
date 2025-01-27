import Add from './add.svg';
import ArrowDown from './arrow-down.svg';
import ArrowUp from './arrow-up.svg';
import Check from './check.svg';
import Close from './close.svg';
import DownLoad from './download.svg';
import Etc from './etc.svg';
import Insta from './instagram.svg';
import List from './list.svg';
import NavbarArrow from './navbar-arrow.svg';
import New from './new.svg';
import Pin from './pin.svg';
import Trash from './trash.svg';
import Write from './write.svg';
import Youtube from './youtube.svg';

export const Icons = {
  add: Add,
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  check: Check,
  close: Close,
  download: DownLoad,
  etc: Etc,
  list: List,
  navbarArrow: NavbarArrow,
  new: New,
  pin: Pin,
  trash: Trash,
  write: Write,

  instagram: Insta,
  youtube: Youtube,
};

export type IconName = keyof typeof Icons;
export const iconNames = Object.keys(Icons) as IconName[];
