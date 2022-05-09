import axios from "axios";
import { stringify } from "querystring";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

export function Animals() {
    const [animals, setAnimals] = useState<IAnimal[]>([]);

    // Adressen som ska användas i programmet
    const URL = "https://animals.azurewebsites.net/api/animals";

    useEffect(() => {
        if (animals.length !== 0) return;
        axios.get(URL).then(response => {
            setAnimals(response.data);
        })
        });
        
        let animalsHtml = animals.map((animal) => {
            
            var animalTemp:number = animal.id;
            var strungAnimal = animalTemp.toString();
            var isFed = localStorage.getItem(strungAnimal);
            

            // Finns säkert ett snyggare sätt att göra det här på så man slipper ha med allt två gånger
            // Men då if statements inte fungerar i en div så har jag ingen bättre idee på hur man gör
            if (isFed == null){
                // Tar bort Acke och Sticky då jag tycker det är äckligt med spindlar/insekter
                if (animal.name !== "Acke" && animal.name !== "Sticky") {
                    return (<div key={animal.id} className = "container">
                        <Link to={"/animal/" + animal.id}>
                    <h2>{animal.name} - behöver matas!</h2>
                    
                    <img src={animal.imageUrl} alt={animal.latinName}></img>
                    </Link>
                    <h2>{animal.shortDescription}</h2>
                    </div>)
                    }
            } else {
                if (animal.name !== "Acke" && animal.name !== "Sticky") {
                    return (<div key={animal.id} className = "container">
                        <Link to={"/animal/" + animal.id}>
                    <h2>{animal.name}</h2>
                    <img src={animal.imageUrl} alt={animal.latinName}></img>
                    </Link>
                    <h2>{animal.shortDescription}</h2>
                    </div>)
            }
        }
            });
    
return <div>
        {animalsHtml}
        </div>;
}