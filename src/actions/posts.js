import { GET_CATEGORIES } from './categories';
import { GET_POSTS_BY_CATEGORY } from './posts';
import { GET_COMMENTS_BY_POST } from './comments';

export default function getPostsByCategory() {
  return {
    type: GET_POSTS_BY_CATEGORY,
    posts,
    category
  }
}
