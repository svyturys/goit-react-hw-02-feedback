import { ListStyled } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListStyled>
      {options.map((option, i) => (
        <li key={option}>
          <button onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
      ))}
    </ListStyled>
  );
};
