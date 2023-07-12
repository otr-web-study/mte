import { type FC } from 'react';
import { ConditionTemplate } from 'Types/Template';
import Template from '../Template';
import ButtonClose from 'components/ButtonClose';
import './Condition.css';

interface ConditionProps {
  condition?: ConditionTemplate;
}
export const Condition: FC<ConditionProps> = ({ condition }) => {
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
            <Template minRows={1} />
          </label>
          <label className="condition__caption condition__caption_purplish">
            <span className="condition__capriton-text">THEN</span>
            <Template minRows={1} />
          </label>
          <label className="condition__caption condition__caption_light-blue">
            <span className="condition__capriton-text">ELSE</span>
            <Template minRows={1} />
          </label>
        </div>
      </div>
      <Template minRows={1} template={condition.template}></Template>
    </>
  );
};
