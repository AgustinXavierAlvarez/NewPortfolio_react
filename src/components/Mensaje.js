import React, { useRef } from 'react'
import '../assets/css/Mensaje.css'
import emailjs from 'emailjs-com';

function Mensaje() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vu2ns5k', 'template_o739x4i', form.current, '5BUpN5WkHMRL0t2Gi')
      .then((result) => {
          console.log(result.text);
          let div= document.querySelector('.Main-mensaje')
          div.style.border='none'
          div.style.boxShadow ='none'
          div.innerHTML=`<h4><i class="fa-sharp fa-solid fa-check-double"></i>Mensaje enviado, gracias por contactarme, en breves contesto!!!</h4>`

      }, (error) => {
          console.log(error.text);
      });

    
  }

  return (
        <div className='Main-mensaje'>
            <h2>Queres mandarme un mensaje?</h2>
           <form ref={form} onSubmit={sendEmail}>
                <div className='Section-mensaje'>
                    <label>Como te llamas?</label>
                    <input type="text" name='UserName' />
                </div>
                <div className='Section-mensaje'>
                    <label>Email</label>
                    <input type='email' name='UserEmail' />
                </div>
                <div className='Section-mensaje'>
                    <label>Como te va?...</label>
                    <textarea type='text' name='UserMessage' />
                </div>
                <div className='Section-mensaje'>
                    <input  type="submit" value="Enviar" />
                </div>
           </form>
        </div>
  );
}

export default Mensaje;
