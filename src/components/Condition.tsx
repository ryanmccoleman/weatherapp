import styled from "@emotion/styled";
export type ConditionType = {
  text: string;
  icon: string;
};

interface ConditionProps {
  condition: ConditionType;
}

const ConditionBox = styled.div`
  font-weight: bold;
  margin-right: 25px;
`;
const Condition = (props: ConditionProps) => {
  const { condition } = props;
  return (
    <ConditionBox>
      <img src={condition.icon} alt={condition.text} />
      <br />
      <span>{condition.text}</span>
    </ConditionBox>
  );
};

export default Condition;
