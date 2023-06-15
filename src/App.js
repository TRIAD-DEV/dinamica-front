
import axios from 'axios';
import './App.css';
import { List, ListItem, Typography, ListItemText, Avatar, ListItemAvatar, Divider, ListSubheader, Box } from '@mui/material';
import { useEffect, useState ,Fragment, React, useLayoutEffect } from 'react';
import { api } from './service/api';
import Modal from 'react-modal';


function App() {

  const [lista, setLista]  = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false)


const getLista = async() => {
  const res = await api.get("/anotacoes/listar");

  setLista(res.data);
}

  useEffect(() => {
    getLista();
  }, [])

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#1C1C1C"
  });


  const deleteRandom = () => {

  }

  return (
    <Box style={{display:"flex", flexDirection:"Column"}} width='100%' height='45vw' display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
        <List sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          '& ul': { padding: 0 }}}
          
        >
          {
          lista.map((anotacao, index) => 
            <>
              <ListItem>
                <button id='buttonPlus' onClick={deleteRandom()}>
                  X
                </button>
                <button id='buttonMinus' onClick={() => setModal(true)}>
                  -
                </button>
                <ListItemText primary={anotacao.titulo} secondary={anotacao.descricao}/>
              </ListItem>
              {lista.length -1 !== index && <Divider/>}
            </>
            )            
          }
        </List>
        <Modal
        isOpen={modalIsOpen}
    
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={() => setIsOpen(false)}>close</button>
        <div>I am a modal</div>
        <form>
          <input placeholder='Título' />
          <input placeholder='Descrição' />
          <button type='submit'>Criar</button>
        </form>
      </Modal>
        <button className='create' onClick={() => setIsOpen(true)} >Criar Anotação</button>
       
        <Modal
        isOpen={modal} 
    
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={() => setModal(false)}>close</button>
        <div>I am a modal</div>
        <form>
          <input placeholder='Título' />
          <input placeholder='Descrição' />
          <button type='submit'>Criar</button>
        </form>
      </Modal>
    </Box>
  );
}

export default App;
