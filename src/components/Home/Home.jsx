import React from 'react'
import { useState } from "react";
import Form from '../Form/Form';
import Hero from '../Hero/Hero';
import "./home.css"


const Home = () => {
    const [showForm, setShowForm] = useState(true);
    return (
        <div className="button">
                <img className="imageGhibli" src="https://bluepixelanimation.files.wordpress.com/2017/12/studio_ghibli_logo.jpg?w=1024&h=717&crop=1" alt="studio ghibli" />
            <div className="center">
            <button
        className="custom"
        onClick={() => setShowForm(true)}
      >
        Home
      </button>
      <button
        className="custom"
        onClick={() => setShowForm(false)}
      >
        Formulario
      </button>
      </div>
      <div>
        {showForm ? (
          <Hero />
        ) : (
          <Form />
        )}
      
      </div>
    </div>
    )
}

export default Home
