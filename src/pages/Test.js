import useLocalStorage from "../hooks/useLocalStorage";

const Test = () => {
  const [items, setItems] = useLocalStorage("fruits", []);

  // setItems([...items, "Mango"])
  


  // var data = "";
  // if(!data) {
  //   const myArray = ['Ayaana', 'Adiyat', 'Mehmed', 'Afra', 'Iqra']
  //   localStorage.setItem('myNieces', JSON.stringify(myArray));
  // }

  // var data = JSON.parse(localStorage.getItem('myNieces'));

  return ( <main></main> );
}

export default Test;