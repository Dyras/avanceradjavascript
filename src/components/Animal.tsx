// Den här filen hanterar allting som har med djurens sidor att göra

import axios from 'axios';
import { useEffect, useState } from 'react';
import { IAnimal } from '../models/IAnimal'

 export const Animal = () => {
  const [animal, setAnimal] = useState<IAnimal[]>([]);
    const URL = "https://animals.azurewebsites.net/api/animals";


    // Finns det snyggare sätt att göra det här på? Utan tvekan, men jag kom på det här helt själv!
    // Det här kontrollerar vilken sida man är inne på. Sidorna är döpta efter djurens ID
    // Således vet vi vilket ID som bör användas på vilken sida!
    var currentUrl:string = window.location.pathname.replace('/animal/', '');
    var currentNumber = parseInt(currentUrl);

    
    // Har hand om knappen när man trycker för att mata djuret
    const feed = () => {
      var isFed = localStorage.getItem(currentUrl);
        if (isFed == null){
          var currentDate = new Date();
          localStorage.setItem(currentUrl, currentDate.toString())
          console.log("Matade djuret!")
        }
    }
    
    // Läser in listan och all info om djuret
    useEffect(() => {
      if (animal.length !== 0) return;
      axios.get(URL).then(response => {
        setAnimal(response.data);
      })
      });
      
      
      let animalHtml = animal.map((animal) => {
       var currentDate;
       currentDate = localStorage.getItem(currentUrl);
       // Ser till att bara ett djur skrivs ut
        if (animal.id == currentNumber) {
          // Kontrollerar om djuret har info i LocalStorage. Har den det klassas den som matad.
        var isFed = localStorage.getItem(currentUrl);
        
        if (isFed != null){
          return (<div key={animal.id} className = "container">
        <h2>{animal.name}</h2>
        <img src={animal.imageUrl} alt={animal.latinName}></img>
        <h2>{animal.longDescription}</h2>
        <h3>Matades senast {currentDate} </h3>
        </div>)

        } else {
        return (<div key={animal.id} className = "container">
        <h2>{animal.name}</h2>
        <img src={animal.imageUrl} alt={animal.latinName}></img>
        <h2>{animal.longDescription}</h2>
        <h2>Behöver matas!</h2>
        <button
        onClick={feed}>Mata {animal.name}</button>
        </div>)
        }
        
        }
        });

        return <div>
        {animalHtml}
        </div>;
    }
