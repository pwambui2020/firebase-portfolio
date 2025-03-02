import React, { useEffect, useState } from 'react';
import { collection, getDocs,addDoc } from "firebase/firestore";
import { firestore } from "../firebase";

function Firestore() {
    const [projects, setProjects] = useState([]);
    const [newProjects, setNewProjects] = useState('');


    const fetchProjects = async () => {

        const querySnapshot = await getDocs(collection(firestore, "projects"));
        const fetchedProjects = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
      
   
    console.log(fetchedProjects);
    setProjects(fetchedProjects);
}

        useEffect(() => {
            fetchProjects();
        }, [])

        const addData = async () => {
            try {
            await addDoc(collection(firestore, "projects"), {
                name: newProjects
              });
              fetchProjects();
            } catch (error) {
                console.error ('error adding document', error);
            }
        }
    

    return(
        <div>
        <h1>Projects</h1>
        <ul>
            {projects.map((project) => (
                <li key={project.id}>
                    {project.name}
                </li>
            ))}
        </ul>
        <input
                type='text'
                placeholder='Please enter a project'
                value={newProjects }
                onChange={ (e) => setNewProjects(e.target.value)}
            />
        <button onClick={addData}>Add Data</button>

        </div>
    )
    
}

export default Firestore;