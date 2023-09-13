import { Section } from 'components/Notification/Notification.styled';

export const Wrapper = ({ title, children }) => {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  );
};
