import Add from './add.svg';
import ArrowDown from './arrow-down.svg';
import ArrowLeft from './arrow-left.svg';
import ArrowRight from './arrow-right.svg';
import ArrowUp from './arrow-up.svg';
import Check from './check.svg';
import Close from './close.svg';
import DownLoad from './download.svg';
import Etc from './etc.svg';
import Insta from './instagram.svg';
import List from './list.svg';
import New from './new.svg';
import Pin from './pin.svg';
import Trash from './trash.svg';
import Write from './write.svg';
import Youtube from './youtube.svg';

export const Icons = {
  add: Add,
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  check: Check,
  close: Close,
  download: DownLoad,
  etc: Etc,
  list: List,
  new: New,
  pin: Pin,
  trash: Trash,
  write: Write,

  instagram: Insta,
  youtube: Youtube,
};

export type IconName = keyof typeof Icons;
export const iconNames = Object.keys(Icons) as IconName[];
