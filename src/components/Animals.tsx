import axios from "axios";
import { useState, useEffect } from "react";
import { IAnimal } from "../models/IAnimal";

export function Animals() {
    const [animals, setAnimals] = useState<IAnimal[]>([]);

    // Adressen som ska användas i programmet
    const URL = "https://animals.azurewebsites.net/api/animals";

    useEffect(() => {

        axios.get(URL).then(response => {
            setAnimals(response.data);
        })
        });
        let animalsHtml = animals.map((animal) => {
            // Tar bort Acke och Sticky då jag tycker det är äckligt med spindlar/insekter
            if (animal.name !== "Acke" && animal.name !== "Sticky") {
            return (<div key={animal.id} className = "container">
            <h2>{animal.name}</h2>
            <img src={animal.imageUrl} alt={animal.latinName}></img>
            <h2>{animal.shortDescription}</h2>
            
            </div>)
            }
            });
    
return <div>
        {animalsHtml}
        </div>;
}