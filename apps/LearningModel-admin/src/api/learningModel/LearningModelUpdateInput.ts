import { InputJsonValue } from "../../types";

export type LearningModelUpdateInput = {
  lastUpdated?: Date | null;
  modelName?: string | null;
  parameters?: InputJsonValue;
  version?: string | null;
};
