import { type FC } from 'react';
import TextAreaAuto from 'components/TextAreaAuto';
import { Template as ITemplate } from 'Types/Template';
import { Condition } from './Condition/Condition';
import './Template.css';

interface TemplateProps {
  template?: ITemplate;
  minRows?: number;
}
const Template: FC<TemplateProps> = ({ template = { message: '' }, minRows = 2 }) => {
  return (
    <>
      <TextAreaAuto minRows={minRows} />
      <Condition condition={template.condition}></Condition>
    </>
  );
};

export default Template;
