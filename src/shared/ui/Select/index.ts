import { Option } from './Option';
import { OptionGroupName } from './OptionGroupName';
import { OptionList } from './OptionList';
import { SelectMain } from './SelectMain';
import { TriggerButton } from './TriggerButton';

export const Select = Object.assign(SelectMain, {
  Option: Option,
  Trigger: TriggerButton,
  List: OptionList,
});

export const GroupingSelect = Object.assign(SelectMain, {
  Option,
  Trigger: TriggerButton,
  List: OptionList,
  Group: OptionGroupName,
});
