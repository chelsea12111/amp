import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const LearningModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
        <TextInput label="modelName" source="modelName" />
        <div />
        <TextInput label="version" source="version" />
      </SimpleForm>
    </Create>
  );
};
