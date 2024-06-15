import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const InteractionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="response" multiline source="response" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="user ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
