import { useEffect, useState } from "react";
import axios from 'axios';


export default function Project(){
    const [project, setproject] =  useState([]);
    useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/api/v1/project`)
        .then((res) => {
        //console.log("FULL RESPONSE:", res.data);   // 👈 add this
        setproject(res.data.project);
        })
        .catch((error) => console.log(error));
    }, []);
    return(
        <section id="projects-section">
            <h1>My Projects</h1>
        <div className="grid-container">
            {project.map((p)=>(
                <div key={p._i} className="card">
                    <img src={`/image/${p.image}`} alt={p.title} />
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <p><strong>Tech:</strong> {p.tech}</p>
                    <a href={p.githubLink}>GitHub</a>
                    <a href={p.liveLink}>Live</a>
                    <p><strong>Created:</strong> {new Date(p.createdAt).toLocaleDateString()}</p>
                </div>
            
            ))}
        </div>
        </section>
    )
}