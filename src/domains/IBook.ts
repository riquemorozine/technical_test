export interface IBook {
  id: string;
  name: string;
  image: string;
  description?: string;
  author_id: string;
  pages?: number;
}
