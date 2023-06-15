
import axios from 'axios';
import './App.css';
import { List, ListItem, Typography, ListItemText, Avatar, ListItemAvatar, Divider, ListSubheader, Box } from '@mui/material';
import { useEffect, useState ,Fragment, React, useLayoutEffect } from 'react';

function App() {

  async function getAnotacoes() {
    try {
      const response = await axios.get('http://localhost:8080/dinamica/anotacoes/listar');
      setAnotacoes(response.data)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const [anotacoes, setAnotacoes] = useState([])

  useEffect(() => {
    getAnotacoes()
  }, [])

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#1C1C1C"
  });

  return (
    <Box width='100%' height='45vw' display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
        <List sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          '& ul': { padding: 0 }}}
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Anotações
            </ListSubheader>
          }
        >
          {
          anotacoes.map((anotacao, index) => 
            <>
              <ListItem>
                <ListItemText primary={anotacao.titulo} secondary={`Código: ${anotacao.codigo}`}/>
              </ListItem>
              {anotacoes.length -1 !== index && <Divider/>}
            </>
            )            
          }
        </List>
    </Box>
  );
}

export default App;
