import CartItem from "./cart-item.model.js";
import Cart from "./cart.model.js";

User.hasOne(Cart,{foreignKey: "userId"});
Cart.belongsTo(User,{foreignKey:"userId", targetKey:"id"});

Cart.belongsToMany(Product,{through: CartItem});
Product.belongsToMany(Cart,{through: CartItem});

export {Cart,CartItem};