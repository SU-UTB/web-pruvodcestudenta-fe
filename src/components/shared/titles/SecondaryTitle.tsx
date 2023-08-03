import { SecondaryTitleStyled } from './SecondaryTitleStyled.styled';

interface ISecondaryTitleProps {
  title: string;
}

export const SecondaryTitle = ({ title }: ISecondaryTitleProps) => {
  return <SecondaryTitleStyled>{title}</SecondaryTitleStyled>;
};
