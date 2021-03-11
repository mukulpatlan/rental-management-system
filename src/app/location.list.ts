import { BranchListItem } from './branch.list';

export interface LocationListItem {
  dealers_id: string;
  name: string;
  route?: string;
  opco: string;
  branches?: BranchListItem[];
}
