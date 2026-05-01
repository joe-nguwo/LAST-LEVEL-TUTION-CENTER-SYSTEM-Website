import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<main class= bg-gray-950/60  min-h-screen  min-w-screen flex flex-col"> 
<nav>
</nav>


</main>

`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
