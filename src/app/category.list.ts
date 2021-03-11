import { SubCategoryList } from './subcategory.list';

export interface CategoryList {
  image?: string;
  name?: string;
  subcategories?: SubCategoryList[];
}
