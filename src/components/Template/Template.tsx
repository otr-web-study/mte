import { type FC } from 'react';
import { Template as ITemplate, NestedTemplatePathKey } from 'Types';
import TemplateItem from './TemplateItem/TemplateItem';
import './Template.css';

interface TemplateProps {
  template: ITemplate;
  path: NestedTemplatePathKey[];
  minRows?: number;
  onDeleteCondition: (path: NestedTemplatePathKey[]) => void;
}
const Template: FC<TemplateProps> = ({ template, minRows = 2, path, onDeleteCondition }) => {
  const content = template.map((templateItem, index) => (
    <TemplateItem
      key={templateItem.key}
      minRows={minRows}
      template={templateItem}
      path={[...path, index]}
      onDeleteCondition={onDeleteCondition}
    />
  ));

  return <div className="template">{content}</div>;
};

export default Template;
