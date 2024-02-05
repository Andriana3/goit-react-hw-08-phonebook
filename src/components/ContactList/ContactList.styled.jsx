import styled from 'styled-components';

export const ContactListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  color: #a45a52;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #3acdcd;
  font-size: 20px;
  color: #a45a52;
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #3acdcd;
  border-radius: 4px;
  transition: 300ms;
  cursor: pointer;
  background-color: #81f5ff;

  &:hover {
    scale: 1.03;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
      rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  }
`;
