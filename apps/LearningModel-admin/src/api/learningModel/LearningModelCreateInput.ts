import { InputJsonValue } from "../../types";

export type LearningModelCreateInput = {
  lastUpdated?: Date | null;
  modelName?: string | null;
  parameters?: InputJsonValue;
  version?: string | null;
};
