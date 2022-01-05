import styled from "styled-components/native";
import theme from "../../../styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`;

export const Greeting = styled.View`
  width: 100%;
  background-color: ${theme.secondary};
  padding: 50px 16px;
  align-items: center;
`;

export const GreetingContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const UserImage = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${theme.success};
`;

export const GreetingText = styled.Text`
  margin-left: 15px;
`;

export const UserName = styled.Text``;

export const ScheduleContent = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const NextSchedules = styled.View`
  width: 100%;
  background-color: ${theme.primary};
  padding: 20px 10px;
`;

export const Title = styled.Text``;

export const NextSchedulesList = styled.View`
  width: 100%;
  background-color: ${theme.failure};
  padding: 20px 10px;
  margin-top: 10px;
`;
