import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from "firebase/firestore";
import Card from '@mui/material/Card';
// import CardData from '@mui/material/CardData';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from "@mui/material";

import Data from '../Data.json';

import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';
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
            console.error('error adding document', error);
        }
    }
    return (
        <Container style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <Grid container spacing={5} style={{ marginTop: '1px' }}>
                {Data.map((result, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 800 }} style={{ borderRadius: '10px' }}>
                            <CardMedia
                                sx={{ height: 500 }}
                                image={result.images}
                                alt='girl'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {result.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {result.des}
                                </Typography>
                                {index === Data.length - 1 && (
                                    <>
                                        <input
                                            type='text'
                                            placeholder='Please enter a project'
                                            value={newProjects}
                                            onChange={(e) => setNewProjects(e.target.value)}
                                        />
                                        <button onClick={addData}>Add Data</button>
                                        <ul className='project-list'>
                {projects.map((project) => (
                    <li key={project.id}>
                        {project.name}
                    </li>
                ))}
                </ul>
                                    </>
                                )}
                            </CardContent>
                            <CardActions>
                                
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Firestore
