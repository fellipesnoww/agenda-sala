import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import SalaDTO from '../../dtos/SalaDTO';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
  padding: 0 16px;
`;

export const RoomsContent = styled.View`
  flex: 1;
`;

export const RoomList = styled(FlatList as new () => FlatList<SalaDTO>).attrs({
  contentContainerStyle: {},
  showVerticalScrollIndicator: false,
})`
  width: 100%;
  padding: 0px 16px;
`;

export const RoomCard = styled.View`
  width: 100%;
  background-color: ${theme.fill};
  elevation: 3;
  shadow-color: #000;
  shadow-offset: 1px 4px;
  shadow-opacity: 0.4;
  shadow-radius: 2px;
  elevation: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 15px;
`;

export const Thumbnail = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const RoomDetails = styled.View`
  width: 100%;
`;

export const Infos = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const Detail = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const DetailName = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${theme.fonts.title_semibold};
  color: ${theme.secondary};
`;

export const DetailValue = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${theme.fonts.body_regular};
  color: ${theme.textBody};
  margin-left: 5px;
  margin-right: 5px;
`;

export const RoomName = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${theme.fonts.title_semibold};
  color: ${theme.secondary};
`;
