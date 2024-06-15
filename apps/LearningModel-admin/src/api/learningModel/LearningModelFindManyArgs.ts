import { LearningModelWhereInput } from "./LearningModelWhereInput";
import { LearningModelOrderByInput } from "./LearningModelOrderByInput";

export type LearningModelFindManyArgs = {
  where?: LearningModelWhereInput;
  orderBy?: Array<LearningModelOrderByInput>;
  skip?: number;
  take?: number;
};
