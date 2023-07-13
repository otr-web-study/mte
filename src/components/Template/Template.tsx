import { type FC } from 'react';
import TextAreaAuto from 'components/TextAreaAuto';
import { Template as ITemplate, NestedTemplatePathKey } from 'Types';
import { Condition } from './Condition/Condition';
import { useMessageEditorInputs } from 'hooks/useMessageEditorInput';

interface TemplateProps {
  template?: ITemplate;
  minRows?: number;
  path: NestedTemplatePathKey[];
}
const Template: FC<TemplateProps> = ({ template = { message: '' }, minRows = 2, path }) => {
  const { handleInputBlur, handleInputFocus, handleInputChange } = useMessageEditorInputs(path);

  return (
    <>
      <TextAreaAuto
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        minRows={minRows}
        value={template.message}
        onChange={handleInputChange}
      />
      <Condition condition={template.condition} path={[...path, 'condition']}></Condition>
    </>
  );
};

export default Template;
