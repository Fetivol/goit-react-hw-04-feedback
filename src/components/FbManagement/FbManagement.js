import { Button, List } from './FbManagement.styled';

export const FbManagement = ({ options, onClick }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <Button onClick={() => onClick(option)}>{option}</Button>
          </li>
        );
      })}
    </List>
  );
};
