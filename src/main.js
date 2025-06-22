import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'

window.onload = () => {
  const typing = document.getElementById("typing");
  if (!typing) return;

  // Mostrar el texto completo sin animación
  typing.textContent = "Emely María Ramírez Villalta";
};

//setupCounter(document.querySelector('#counter'))

