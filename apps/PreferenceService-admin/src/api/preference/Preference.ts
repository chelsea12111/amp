import { JsonValue } from "type-fest";

export type Preference = {
  context: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userId: string | null;
  value: JsonValue;
};
