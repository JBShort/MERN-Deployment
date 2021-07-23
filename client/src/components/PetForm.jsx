import React, {useState} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import '../App.css';

const PetForm = () => {
    const [name, setName] = useState("");
    const [nameErrors, setNameErrors] = useState("");

    const [type, setType] = useState("");
    const [typeErrors, setTypeErrors] = useState("");

    const [description, setDescription] = useState("");
    const [descriptionErrors, setDescErrors] = useState("");

    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const [dbErrors, setDbErrors] = useState([]);

    const createPet = (e) => {
        e.preventDefault();
        const newPet = {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        }

        axios.post('http://localhost:8000/api/new', newPet)
        .then(res => {
            console.log(res);
            navigate("/")
        })
        .catch(err => {
            console.log("Error Triggered OwO please look at the reason!!!!");
            console.log(err.response.data)
            const {errors} = err.response.data;
            const messages = Object.keys(errors).map(error => errors[error].message);
            setDbErrors(messages);
        })
    }

    const handleName = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 1) {
            setNameErrors("Name is required");
        } else if (e.target.value.length < 3){
            setNameErrors("Name must be at least 3 characters");
        } else {
            setNameErrors("");
        }
    }

    const handleType = (e) => {
        setType(e.target.value);
        if(e.target.value.length < 1) {
            setTypeErrors("Type is required");
        } else if (e.target.value.length < 3) {
            setTypeErrors("Type must be at least 3 characters");
        } else {
            setTypeErrors("")
        }
    }

    const handleDesc = (e) => {
        setDescription(e.target.value);
        if(e.target.value.length < 1) {
            setDescErrors("Description is required");
        } else if (e.target.value.length < 3) {
            setDescErrors("Description must be at least 3 characters")
        } else {
            setDescErrors("")
        }
    }

    const handleSkill1 = (e) => {
        setSkill1(e.target.value);
        
    }

    const handleSkill2 = (e) => {
        setSkill2(e.target.value);
        
    }


    const handleSkill3 = (e) => {
        setSkill3(e.target.value);
        
    }


    return (
        <div>
            <h3>Add a New Pet!</h3>
            <Link to="/"><button>Back to Home</button></Link>
            <form onSubmit={createPet}>
            {dbErrors.map((err, i) => <p key={i}>{err}</p>)}
                <p>
                    <label>Name: </label> <br />
                    { 
                        nameErrors ?
                        <p style={{color:'red'}}>{ nameErrors }</p> :
                        ''
                    }
                    <input type="text" onChange={handleName} value={name} />
                </p>
                <p>
                    <label>Type: </label> <br />
                    { 
                        typeErrors ?
                        <p style={{color:'red'}}>{ typeErrors }</p> :
                        ''
                    }
                    <input type="text" onChange={handleType} value={type} />
                </p>
                <p>
                    <label>Description: </label> <br />
                    { 
                        descriptionErrors ?
                        <p style={{color:'red'}}>{ descriptionErrors }</p> :
                        ''
                    }
                    <input type="text" onChange={handleDesc} value={description} />
                </p>
                <div>
                    <p>
                        <h4>Skills</h4>
                        <label>Skill #1</label>
                        <input type="text" onChange={handleSkill1} value={skill1} /> <br />
                        <label>Skill #2</label>
                        <input type="text" onChange={handleSkill2} value={skill2} /> <br />
                        <label>Skill #3</label>
                        <input type="text" onChange={handleSkill3} value={skill3} />
                    </p>
                </div>
                <input type="submit" value="Create Pet!" />
            </form>
        </div>
    )
}

export default PetForm
