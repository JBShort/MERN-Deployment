import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from "@reach/router";
import '../App.css';

const Details = (props) => {
    const {id} = props;
    const [pet, setPet] = useState({});


    useEffect(() => {
        getPetFromDB(id);
    }, [id])

    const getPetFromDB = (id) => {
        console.log(id);
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                console.log(res.data);
                setPet(res.data);
            })
            .catch(err => console.log(err))
    }

    const deletePet = (id) => {
        console.log(id);
        axios.delete('http://localhost:8000/api/pets/delete/' + id)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>Details about {pet.name}</h3>
            <Link to="/"><button>Back to Home</button></Link>
            <p>Pet Type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <h4>Skills</h4>
            <p>{pet.skill1}</p>
            <p>{pet.skill2}</p>
            <p>{pet.skill3}</p>

            <button onClick={() => {deletePet(pet._id)}}>Adopt {pet.name}</button>
        </div>
    )
}

export default Details
