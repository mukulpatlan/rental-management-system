import { CategoryList } from './category.list';

export interface BranchListItem {
  branch_id: string;
  name: string;
  categories: CategoryList[];
}
