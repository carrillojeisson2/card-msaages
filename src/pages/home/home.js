import React, { useEffect, useState } from "react";
import styles from "./home.module.scss";
import { Form } from "semantic-ui-react";
import { useRouter } from "next/router";

import Link from "next/link";

export default function Home() {
  const [message, setMessage] = useState("");
  const [persona, setPersona] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado para el spinner

  const router = useRouter();

  const [input, setInput] = useState("");

  const fetchMessage = async () => {
    setIsLoading(true); 

    try {
      const res = await fetch("/api/getResponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageContent: input }),
      });
      const data = await res.json();
      console.log(data);
      setMessage(data.message);
      setPersona(data.role);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Error al cargar el mensaje.");
    } finally {
      setIsLoading(false); 
    }
  };

  const oracion = input;
  const regex = /para (\w+)/;
  const resultado = oracion.match(regex);
  let nombre;
  if (resultado) {
    nombre = resultado[1];
  } else {
    nombre = "No se encontró el nombre";
  }
  console.log(nombre);

  return (
    <>
      <container>
        <h1>Tarjetas personalizadas</h1>

        <div>
          <Form className={styles.formulario}>
            <label>Ingrese la informacion de la tarjeta</label>
            <Form.Input
              type="text"
              value={input}
              placeholder="mensaje"
              name="mensaje"
              onChange={(e) => setInput(e.target.value)}

            />

            <button onClick={fetchMessage}>Generar Mensaje</button>
          </Form>
        </div>

        <div className={isLoading ? styles.spinner : styles.hidden}></div>

        {message ? (
          <div className={styles.response}>
            {message ? <h2 className={styles.para}>Para: {nombre}</h2> : ""}

            {message ? <h3 className={styles.de}>De: {persona}</h3> : ""}

            <p className={styles.mensaje}>{message}</p>
          </div>
        ) : (
          ""
        )}
      </container>


      {message ? (
        <div className={styles.aboutme }>
         
          <Link href="me/aboutme">
            View Details
          </Link>

        </div>
      ) : (
        <p></p>
      )}

   
    </>
  );
}
