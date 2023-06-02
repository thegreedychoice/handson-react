export interface PropsFruitListItem {
  id: string;
  name: string;
}

export interface PropsFruitList {
  fruits: Array<PropsFruitListItem>;
}

function FruitListItem(props: PropsFruitListItem) {
  function handleClick(e: React.MouseEvent<HTMLLIElement>, id: string) {
    console.log(e);
    console.log(`removed ${id}`);
  }

  return <li onClick={(e) => handleClick(e, props.id)}>{props.name} </li>;
}

export default function FruitList(props: PropsFruitList) {
  const fruitListItems = props.fruits.map((fruit: PropsFruitListItem) => (
    <FruitListItem key={fruit.id} {...fruit} />
  ));

  return <ul>{fruitListItems}</ul>;
}

/*
A SyntheticEvent is a cross-browser wrapper around the browser’s native event. It has the same interface as the browser’s native event, 
including stopPropagation() and preventDefault(), except the events work identically across all browsers.
*/
