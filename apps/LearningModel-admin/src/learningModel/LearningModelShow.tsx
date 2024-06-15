import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const LearningModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lastUpdated" source="lastUpdated" />
        <TextField label="modelName" source="modelName" />
        <TextField label="parameters" source="parameters" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="version" source="version" />
      </SimpleShowLayout>
    </Show>
  );
};
