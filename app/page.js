import Image from "next/image";
import { Button } from "/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button className= "hover:scale-105 hover:shadow-lg">Click Me</Button>
    </div>
  );
}
