import { type FC } from 'react';
import { ConditionTemplate, NestedTemplatePathKey } from 'Types';
import Template from '../Template';
import ButtonClose from 'components/ButtonClose';
import AppInput from 'components/AppInput';
import { useMessageEditorInputs } from 'hooks/useMessageEditorInput';
import './Condition.css';

interface ConditionProps {
  condition?: ConditionTemplate;
  path: NestedTemplatePathKey[];
}
export const Condition: FC<ConditionProps> = ({ condition, path }) => {
  const { handleInputBlur, handleInputFocus } = useMessageEditorInputs(path);

  if (!condition) return null;

  return (
    <>
      <div className="condition">
        <div className="conditon__btn-wrapper">
          <ButtonClose
            onClick={() => {
              console.log('close');
            }}
          />
          <div className="condition__btn-border"></div>
        </div>
        <div className="condition__wrapper">
          <label className="condition__caption condition__caption_blue">
            <span className="condition__capriton-text">IF</span>
            <AppInput onFocus={handleInputFocus} onBlur={handleInputBlur} readonly />
          </label>
          <label className="condition__caption condition__caption_purplish">
            <span className="condition__capriton-text">THEN</span>
            <Template minRows={1} template={condition.success} path={[...path, 'success']} />
          </label>
          <label className="condition__caption condition__caption_light-blue">
            <span className="condition__capriton-text">ELSE</span>
            <Template minRows={1} template={condition.fail} path={[...path, 'fail']} />
          </label>
        </div>
      </div>
      <Template minRows={1} template={condition.template} path={[...path, 'template']}></Template>
    </>
  );
};
