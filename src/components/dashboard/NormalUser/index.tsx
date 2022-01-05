import React from "react";

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
} from "./styles";

export default function NormalUser() {
  return (
    <Container>
      <Greeting>
        <GreetingContent>
          <TextContent>
            <UserImage />
            <GreetingText>Olá, </GreetingText>
            <UserName>Fellipe</UserName>
          </TextContent>
          <UserImage />
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
