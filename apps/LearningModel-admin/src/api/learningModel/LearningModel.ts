import { JsonValue } from "type-fest";

export type LearningModel = {
  createdAt: Date;
  id: string;
  lastUpdated: Date | null;
  modelName: string | null;
  parameters: JsonValue;
  updatedAt: Date;
  version: string | null;
};
