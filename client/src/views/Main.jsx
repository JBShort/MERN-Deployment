import React, {useEffect, useState} from 'react';
import { Link } from "@reach/router"
import axios from 'axios';
import '../App.css';

const Main = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getPetsFromDB();
    }, [])

    const getPetsFromDB = () => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                console.log(res.data)
                let ordered = res.data;
                setPets(ordered.sort((a,b) => a.type.localeCompare(b.type)));
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/pets/new">Add a new pet to the shelter</Link>
            <h3>These pets are looking for a good home</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    pets.map((pet, i) => {
                        return (
                            <tr key={i}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td> 
                                    <button> <Link to={"/pets/" + pet._id}>Details</Link> </button>
                                    <button> <Link to={"/pets/edit/" + pet._id}>Edit</Link> </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Main
