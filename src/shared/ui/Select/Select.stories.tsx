import type { Meta, StoryObj } from '@storybook/react';

import { GroupingSelect } from './GroupingSelect';
import { Select } from './index';

const meta: Meta<typeof Select> = {
  title: 'components/common/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

export const Basic: StoryObj<typeof Select> = {
  parameters: {
    docs: {
      description: {
        component: '드롭다운 선택 컴포넌트로, 기본 선택과 그룹화된 선택을 지원합니다.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['md', 'lg'],
      description: 'Select 컴포넌트의 크기 옵션입니다.',
    },
    contents: {
      control: 'object',
      description: '선택할 수 있는 옵션 리스트입니다.',
    },
    placeholder: {
      control: 'text',
      description: '옵션을 선택하기 이전에 표시되는 텍스트입니다.',
    },
  },
  args: {
    size: 'md',
    contents: ['객관식', '단답형', '체크박스', '드롭다운', '파일'],
    placeholder: '유형을 선택해주세요',
  },
  render: (args) => (
    <Select size={args.size} defaultValue={args.contents[0]}>
      {args.contents.map((item, index) => (
        <Select.Option key={index} id={String(index + 1)} name={item} />
      ))}
    </Select>
  ),
};

export const Grouping: StoryObj<typeof GroupingSelect> = {
  args: {
    contents: {
      ICT융합대학: ['디지털콘텐츠디자인학과', '융합소프트웨어학부', '정보통신공학과'],
      미래융합대학: [
        '창의융합인재학부',
        '사회복지학과',
        '부동산학과',
        '법무행정학과',
        '심리치료학과',
        '미래융합경영학과',
        '멀티디자인학과',
        '회계세무학과',
        '계약학과',
      ],
      자연과학대학: ['수학과', '물리학과', '화학과', '식품영양학과', '생명과학정보학과'],
      공과대학: [
        '전기공학과',
        '전자공학과',
        '반도체공학과',
        '화학공학과',
        '신소재공학과',
        '환경에너지공학과',
        '컴퓨터공학과',
        '토목환경공학과',
        '교통공학과',
        '기계공학과',
        '산업경영공학과',
        '공학교육혁신센터',
      ],
      예술체육대학: ['디자인학부', '스포츠학부', '바둑학과', '예술학부'],
      건축대학: ['건축학부'],
      방목기초교육대학: ['전공자유학부(인문)', '전공자유학부(자연)', '융합전공학부(인문)'],
      국제학부: ['글로벌비즈니스전공'],
    },
    placeholder: '학과를 선택해주세요',
  },
  parameters: {
    controls: { exclude: ['size'] },
    docs: {
      description: {
        story: '그룹화된 옵션을 제공하는 Select 컴포넌트입니다. ',
      },
    },
  },
  render: (args) => <GroupingSelect {...args} />,
};
