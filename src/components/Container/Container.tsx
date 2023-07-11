import { ReactNode, type FC } from 'react';
import './Container.css';

interface ContainerProps {
  children: ReactNode;
}
export const Container: FC<ContainerProps> = ({ children }) => {
  return <section className="container">{children}</section>;
};
