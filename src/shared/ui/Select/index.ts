import { Option } from './Option';
import { OptionList } from './OptionList';
import { SelectMain } from './SelectMain';
import { TriggerButton } from './TriggerButton';
export { GroupingSelect } from './GroupingSelect';

export const Select = Object.assign(SelectMain, {
  Option: Option,
  Trigger: TriggerButton,
  List: OptionList,
});
