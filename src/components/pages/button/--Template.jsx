import Button from '@atoms/button/Button';
import { objectToProps, toSentenceCase } from '~/constants/converter';

const defaultProps = {
  title: 'Click me',
};
/**
 * @deprecated
 */
const ButtonTemplate = args => <Button {...defaultProps} {...args} />;
const ButtonTemplateString = args => `<Button ${objectToProps(args)}/>`;

const type = [
  {
    title: 'Click me',
    type: 'primary',
  },
  {
    title: 'Click me',
    type: 'secondary',
  },
  {
    title: 'Click me',
    type: 'dashed',
  },
  {
    title: 'Click me',
    type: 'text',
  },
  {
    title: 'Click me',
    type: 'link',
  },
];

type.map((item) => {
  ButtonTemplate[toSentenceCase(item?.type)] = ButtonTemplate.bind(null, item);
});

export const typeString = type.reduce((acc, item) => {
  acc += ButtonTemplateString(item);
  return acc + '\n';
}, `${ButtonTemplateString(defaultProps)} \n`);

export default ButtonTemplate;
