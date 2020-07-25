import React from "react";
import Item from "./Item";
import CategoryButton from "./CategoryButton";
import ResetButton from "./ResetButton";

const arrayOfItems = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5,
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15,
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5,
  },
  {
    name: "Agua cacota",
    description: "Agua de un charco del Himalaya",
    quantity: 5,
    category: "Bebida",
    price: 5,
  },
];

let arrayToShow = arrayOfItems;

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClick(category) {
    console.log(`Has pulsado en la categoría ${category}`);
    arrayToShow = arrayOfItems.filter((item) => {
      return item.category === category;
    });
    this.forceUpdate();
  }

  handleClickReset() {
    arrayToShow = arrayOfItems;
    this.forceUpdate();
  }

  render() {
    const arrayToJSX = arrayToShow.map((element, idx) => {
      return (
        <li>
          <Item
            name={element.name}
            description={element.description}
            quantity={element.quantity}
            category={element.category}
            price={element.price}
            key={idx}
          />
          <CategoryButton
            category={element.category}
            eventClick={() => {
              this.handleClick(element.category);
            }}
          />
        </li>
      );
    });
    return (
      <div className="item-list">
        <ul className="item-list">{arrayToJSX}</ul>
        <ResetButton
          eventReset={() => {
            this.handleClickReset();
          }}
        />
      </div>
    );
  }
}

export default ItemList;
