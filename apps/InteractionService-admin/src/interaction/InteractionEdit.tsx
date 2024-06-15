import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const InteractionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="response" multiline source="response" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="user ID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
