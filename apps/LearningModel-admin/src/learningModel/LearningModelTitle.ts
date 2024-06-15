import { LearningModel as TLearningModel } from "../api/learningModel/LearningModel";

export const LEARNINGMODEL_TITLE_FIELD = "modelName";

export const LearningModelTitle = (record: TLearningModel): string => {
  return record.modelName?.toString() || String(record.id);
};
