import { useEffect, useState } from "react";
import axios from 'axios';


export default function Certificate(){
    const [certificate, setcertificate] =  useState([]);
    useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/api/v1/certificate`)
        .then((res) => {
        //console.log("FULL RESPONSE:", res.data);   // 👈 add this
        setcertificate(res.data.certificate);
        })
        .catch((error) => console.log(error));
    }, []);
    return(
        <section id="certificates-section">
        <h1>My Certificates</h1>
        <div className="grid-container">
        {certificate.map((c) => (
        <div key={c._id} className="card">
          <img src={`/image/${c.image}`} alt={c.title} />
          <h3>{c.title}</h3>

          <p><strong>Issuer:</strong> {c.issuer}</p>

          <p>
            <strong>Date:</strong>{" "}
            {c.issueDate
              ? new Date(c.issueDate).toLocaleDateString()
              : "N/A"}
          </p>

          <p>{c.description}</p>
        </div>
      ))}
      </div>
    </section>
    )
}