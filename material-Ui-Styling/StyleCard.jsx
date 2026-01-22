// StyledCard.jsx
import styled from "styled-components";

const Card = styled.div`
  width: 320px;
  background: white;
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #1e40af;
  }
`;

export default function StyledCard() {
  return (
    <Card>
      <Avatar src="https://i.pravatar.cc/150" />
      <h2>Abeer Rizwan</h2>
      <p>Frontend Developer</p>
      <Button>Follow</Button>
    </Card>
  );
}
