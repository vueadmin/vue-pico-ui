import Card from "./src/main";

Card.install = (vue) => {
  vue.component(Card.name, Card);
};

export default Card;
