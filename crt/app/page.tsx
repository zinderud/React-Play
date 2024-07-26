import Image from "next/image";
import ProductCard from "./components/ProductCard";
import   Student  from "./components/Student";
import Greating from "./components/Greating";
import Button from "./components/Button";
import Counter from "./components/Counter";
import NameCh from "./components/NameCh";
import ColorPicker from "./components/ColorPicker";
import Liste from "./components/Liste";
 
 

export default function Home() {
  return (
    <main   >
      <div>Merhaba</div>
{/*       <ProductCard></ProductCard> */}
      <Student name="sedat" isStudent={false}></Student>
      <Student name="dere sade" isStudent={false}></Student>
      <Greating name="dsfs" isLogin={true} ></Greating>
      <Liste></Liste>
      <Button  ></Button>
      <Counter></Counter>
      <NameCh></NameCh>
      <ColorPicker></ColorPicker>
    
    </main>
  );
}
