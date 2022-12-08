/* caso use algum tipo de link 
pois o recat nao usa a tag <a> se usa essa 
biblioteca, e se usa dessa forma: 
(<Link to='./CadastroUsuario'>Crie uma agora</Link>)*/
import {Link} from 'react-router-dom';
import styles from './App.module.css';

function chatBot() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.titulo}>Chat Bot SIDI</h1>
          <img className={styles.img} src="LOGOSIDI.jpeg"   width="70px" height="70px"/>          
        </div>
        <div className={styles.body}>
          <p className={styles.message}>Hello</p>
          <p className={styles.user_message}>Hi</p>
        </div>
        <div className={styles.fooder}>
          <form className={styles.form}>
            <input className={styles.input} type="text" name="" placeholder="Digite aqui"/>
            <button className={styles.button}>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default chatBot;
