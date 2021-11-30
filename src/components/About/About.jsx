import React, { useState } from 'react'
import "./About.css"

const useCounter = () => {
    const [value, setValue] = useState(0);
    const increase = () => {
      setValue(value + 1);
    };
    const decrease = () => {
      setValue(value - 1);
    };
    const reset = () => {
      setValue(0);
    };
    return {
      value,
      increase,
      decrease,
      reset,
    };
  };

const About = () => {
    const counter = useCounter();
  return (

    <div className="about">
        <div>
            <h3>MISIÓN</h3>
            <p>A través de su propia filosofia contar historias educativas para los niños y otras generaciones para su propia reflexión.</p>
            <h3>VISIÓN</h3>
            <p>Utilizar una animación diferente de la tradicional , mas expresiva y menos superficial que otras compañías productoras tanto extranjeras como japonesas.</p>
            <h3>VALORES</h3>
            <p>Los principales valores que mueven a los estudios Ghibli y están presentes en sus peliculas son la valentía, la piedad, el compañerismo, los cambios importantes reflejados en la vida de las personas y la lealtad.</p>
             <h3>Aqui tenemos un contador, comentanos del 1 al 10. Que te parecio la pagina web</h3> 
        </div>
      <div className="counter"> 
        <div>{counter.value}</div>
        <button onClick={counter.decrease}>-</button>
        <button onClick={counter.increase}>+</button>
        <button onClick={counter.reset}>reset</button>
      </div>
    </div>
  );
};


export default About
