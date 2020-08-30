import React from "react";
import styles from './index.module.styl';

export const Form = () => {
 return (
   <div className={styles.wrapper}>
     <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSePgcrdxI5JWOzUuxXbw5SYS8zAvetptOq1wdcXcqX42JmdMw/viewform?embedded=true"
      width="880"
      height="1004"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
     >
       Loading…
     </iframe>
   </div>
 )
}
