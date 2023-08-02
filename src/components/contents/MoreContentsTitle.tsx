import { MoreContentsTitleWrapper } from './MoreContentsTitleWrapper.styled';

interface MoreContentsTitleProps {
  title: string
}

export const MoreContentsTitle = ({ title }: MoreContentsTitleProps) => {
  return <MoreContentsTitleWrapper>{title}</MoreContentsTitleWrapper>;
};
