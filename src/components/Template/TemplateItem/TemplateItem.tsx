import { type FC } from 'react';
import TextAreaAuto from 'components/TextAreaAuto';
import { TemplateItem as ITemplateItem, NestedTemplatePathKey } from 'Types';
import { Condition } from '../Condition/Condition';
import { useMessageEditorInputs } from 'hooks/useMessageEditorInput';
import './TemplateItem.css';

interface TemplateItemProps {
  template: ITemplateItem;
  minRows?: number;
  path: NestedTemplatePathKey[];
  onDeleteCondition: (path: NestedTemplatePathKey[]) => void;
}

const TemplateItem: FC<TemplateItemProps> = ({ template, minRows, path, onDeleteCondition }) => {
  const { handleInputBlur, handleInputFocus, handleInputChange } = useMessageEditorInputs(path);

  return (
    <div className="template-item">
      <TextAreaAuto
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        minRows={minRows}
        value={template.message}
        onChange={handleInputChange}
      />
      <Condition
        condition={template.condition}
        path={[...path, 'condition']}
        onDelete={onDeleteCondition}
      />
    </div>
  );
};

export default TemplateItem;
