interface Props {
  text: string;
  handleAction: () => void;
}

const CookieButton = ({ text, handleAction }: Props) => {
  return <button onClick={handleAction}>{text}</button>;
};

export default CookieButton;
