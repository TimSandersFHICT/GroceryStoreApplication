import {Product} from './product.model';
import {User} from './user.model';

export interface ShoppingList {
    user: User;
    products: Product[];
}
