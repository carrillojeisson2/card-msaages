import React from "react";
import styles from "./aboudme.module.scss";

export default function AboutMe() {

  const pdfUrl = 'https://drive.google.com/file/d/1ot6oBnMqxNH0ErXC-rMwFW1ovBPUWZMh/view?usp=sharing';
  return (
    <>
    <div className={styles.container}>
      <div className={styles.details}>
        <h2>Hello Word!</h2>

        <p>
          Hello, I’m Jeisson—Jeick to friends. I'm a software developer
          passionate about technology. I love tackling challenges that push my
          knowledge and help me become better. Every day is a new opportunity to
          improve, to do more, to learn more. I love my profession and want to
          be among the best.
        </p>

        <p>I hope to see you again soon. Have a good day. =)</p>
      </div>

    
    </div>


    <div className={styles.me}>
      <a
        href={pdfUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        
      >
        CV
      </a>
    </div>
    </>
  );
}
