import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${theme.fonts.title_semibold};
  color: ${theme.secondary};
`;
