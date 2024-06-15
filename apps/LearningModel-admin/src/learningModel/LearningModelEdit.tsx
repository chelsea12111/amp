import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const LearningModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
        <TextInput label="modelName" source="modelName" />
        <div />
        <TextInput label="version" source="version" />
      </SimpleForm>
    </Edit>
  );
};
