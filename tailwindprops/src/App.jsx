import "./App.css";
import Card from "./components/Card";

function App() {
  let imgSrcArr = "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"

  let laptops = {
    brand: "Apple",
    model: "Macbook Pro",
    price: 1000,
  }
  let mobiles = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 500,
  }
  //let newArr = [1,2,3,4,5]
  return (
    <>
      <h1 className="bg-blue-400 text-black rounded-xl p-4 text-3xl font-bold">
        Hello world!
      </h1>
      <div className="p-4"></div>
      <Card items={laptops} imgSrc ={imgSrcArr} />
      <Card items={mobiles} imgSrc ={imgSrcArr} />
    </>
  );
}

export default App;
