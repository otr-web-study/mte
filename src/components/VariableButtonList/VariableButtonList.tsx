import { type FC } from 'react';
import Button from 'components/Button';
import './VariableButtonList.css';

interface VariableButtonListProps {
  arrVarNames: string[];
  onClick: (variable: string) => void;
}
const VariableButtonList: FC<VariableButtonListProps> = ({ arrVarNames, onClick }) => {
  const content = arrVarNames.map((variable, idx) => (
    <li key={idx}>
      <Button
        className="variable-list__btn"
        onClick={() => onClick(variable)}
      >{`{${variable}}`}</Button>
    </li>
  ));

  return <ul className="variable-list">{content}</ul>;
};

export default VariableButtonList;
