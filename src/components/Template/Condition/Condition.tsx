import { type FC } from 'react';
import { ConditionTemplate, NestedTemplatePathKey } from 'Types';
import Template from '../Template';
import ButtonClose from 'components/ButtonClose';
import TextAreaAuto from 'components/TextAreaAuto';
import { useMessageEditorInputs } from 'hooks/useMessageEditorInput';
import './Condition.css';

interface ConditionProps {
  condition?: ConditionTemplate;
  path: NestedTemplatePathKey[];
  onDelete: (path: NestedTemplatePathKey[]) => void;
}
export const Condition: FC<ConditionProps> = ({ condition, path, onDelete }) => {
  const { handleInputFocus, handleInputChange } = useMessageEditorInputs(path);

  if (!condition) return null;

  return (
    <>
      <div className="condition">
        <div className="conditon__btn-wrapper">
          <ButtonClose onClick={() => onDelete(path)} />
          <div className="condition__btn-border"></div>
        </div>
        <div className="condition__container">
          <label className="condition__caption">
            <span className="condition__capriton-text condition__capriton-text_blue">IF</span>
            <TextAreaAuto
              value={condition.variable}
              minRows={1}
              onFocus={handleInputFocus}
              onChange={handleInputChange}
            />
          </label>
          <div className="condition__wrapper">
            <span className="condition__capriton-text condition__capriton-text_purplish">THEN</span>
            <Template
              minRows={1}
              template={condition.success}
              path={[...path, 'success']}
              onDeleteCondition={onDelete}
            />
          </div>
          <div className="condition__wrapper">
            <span className="condition__capriton-text condition__capriton-text_light-blue">
              ELSE
            </span>
            <Template
              minRows={1}
              template={condition.fail}
              path={[...path, 'fail']}
              onDeleteCondition={onDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
};
