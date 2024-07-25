import Image from "next/image";
import ProductCard from "./components/ProductCard";
import   Student  from "./components/Student";
import Greating from "./components/Greating";
import Button from "./components/Button";
 
 

export default function Home() {
  return (
    <main   >
      <div>Merhaba</div>
{/*       <ProductCard></ProductCard> */}
      <Student name="sedat" isStudent={false}></Student>
      <Student name="dere sade" isStudent={false}></Student>
      <Greating name="dsfs" isLogin={true} ></Greating>
     
      <Button  ></Button>
    </main>
  );
}
