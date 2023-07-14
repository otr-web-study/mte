import { type FC } from 'react';
import { Template as ITemplate, NestedTemplatePathKey } from 'Types';
import TemplateItem from './TemplateItem/TemplateItem';

interface TemplateProps {
  template: ITemplate;
  path: NestedTemplatePathKey[];
  minRows?: number;
}
const Template: FC<TemplateProps> = ({ template, minRows = 2, path }) => {
  const content = template.map((templateItem, index) => (
    <TemplateItem
      key={templateItem.key}
      minRows={minRows}
      template={templateItem}
      path={[...path, index]}
    />
  ));

  return content;
};

export default Template;
