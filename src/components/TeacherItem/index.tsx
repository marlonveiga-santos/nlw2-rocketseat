import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import'./styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/33578212?s=460&u=be13f98c4824fe177ec3fab6f6ddd671f7b0e40c&v=4" alt="Danilo Vieira"/>
        <div>
          <strong>Marlon Veiga</strong>
          <span>Desenvolvimento</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt 
        <br/> <br/>
        repudiandae, accusantium architecto, voluptate corporis obcaecati 
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button" >
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;