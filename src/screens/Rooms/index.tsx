import React from 'react';
import { Container } from '../../components/dashboard/NormalUser/styles';
import Header from '../../components/Header';
import SalaDTO from '../../dtos/SalaDTO';
import {
  Detail,
  DetailName,
  DetailValue,
  Infos,
  RoomCard,
  RoomDetails,
  RoomList,
  RoomName,
  RoomsContent,
  Thumbnail,
} from './styles';

export default function Rooms() {
  const rooms: SalaDTO[] = [
    {
      id: 1,
      nome: 'Sala 1',
      thumbnail:
        'https://i.pinimg.com/originals/b1/a7/ca/b1a7caa5393b4b940a2e1a5f2abc8e07.jpg',
    },
    {
      id: 2,
      nome: 'Sala 2',
      thumbnail:
        'https://5.imimg.com/data5/LG/QO/YN/SELLER-38995488/conference-room-designing-500x500.PNG',
    },
    {
      id: 3,
      nome: 'Sala 3',
      thumbnail:
        'https://5.imimg.com/data5/SELLER/Default/2020/11/PJ/WW/MQ/33216948/ceiling-light-1-500x500.jpg',
    },
    {
      id: 4,
      nome: 'Sala 4',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInZ3kf3i4TTTbNY82c9azKKqGufm2uK9tKn2EduUP4fJds3EYl-KspZhi5DXNuwxL_Dk&usqp=CAU',
    },
    {
      id: 5,
      nome: 'Sala 5',
      thumbnail:
        'https://3.imimg.com/data3/OL/RX/MY-8396885/conference-room-interior-500x500.jpg',
    },
    {
      id: 6,
      nome: 'Sala 6',
      thumbnail:
        'https://images.unsplash.com/photo-1503423571797-2d2bb372094a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVldGluZyUyMHJvb218ZW58MHx8MHx8&w=1000&q=80',
    },
  ];

  return (
    <Container>
      <Header title="Salas" />
      <RoomsContent>
        <RoomList
          data={rooms}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <RoomCard>
              <Thumbnail source={{ uri: item.thumbnail }} />
              <RoomDetails>
                <RoomName>{item.nome}</RoomName>
                <Infos>
                  <Detail>
                    <DetailName>U:</DetailName>
                    <DetailValue>5</DetailValue>
                  </Detail>
                  <Detail>
                    <DetailName>T:</DetailName>
                    <DetailValue>2</DetailValue>
                  </Detail>
                  <Detail>
                    <DetailName>L:</DetailName>
                    <DetailValue>2</DetailValue>
                  </Detail>
                </Infos>
              </RoomDetails>
            </RoomCard>
          )}
        />
      </RoomsContent>
    </Container>
  );
}
