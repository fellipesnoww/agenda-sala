import React from 'react';

import {
  Container,
  Greeting,
  GreetingContent,
  GreetingText,
  NextSchedules,
  NextSchedulesList,
  ScheduleContent,
  TextContent,
  Title,
  UserImage,
  UserName,
} from './styles';

export default function NormalUser() {
  return (
    <Container>
      <Greeting>
        <GreetingContent>
          <TextContent>
            <UserImage
              source={{
                uri: 'https://avatars.githubusercontent.com/u/48105194?v=4',
              }}
            />
            <GreetingText>Olá, </GreetingText>
            <UserName>Fellipe</UserName>
          </TextContent>
          <UserImage
            source={{
              uri: 'https://avatars.githubusercontent.com/u/48105194?v=4',
            }}
          />
        </GreetingContent>
      </Greeting>
      <ScheduleContent>
        <NextSchedules>
          <Title>Seus próximos agendamentos</Title>
          <NextSchedulesList />
          <NextSchedulesList />
          <NextSchedulesList />
          <NextSchedulesList />
          <NextSchedulesList />
          <NextSchedulesList />
        </NextSchedules>
      </ScheduleContent>
    </Container>
  );
}
