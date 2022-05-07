import React from "react";
import {useNavigate} from "react-router-dom"

import {
    List,
    ListItemButton,
    Divider,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
    Container,
    Box
} from "@mui/material";

import CharacterItem from "./pieces/CharacterItem";

type Props = {
    data:Array<any>
}

 const Characters:React.FC<Props> = (props) =>{

    const navigate = useNavigate()

    const handleClick = (id:string) => {

      return () => {
      navigate(`/character/${id}`)
      }
    }

    return  <div className="characters">
      <Container maxWidth="sm" >
      <Box sx={{ bgcolor: 'white', height: '100vh' }} >
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

        {props.data.map((e:any,i:number) => {
            return  <ListItemButton alignItems="flex-start" key={e.id} onClick={handleClick(e.id)}>
            <ListItemAvatar>
              <Avatar alt="Avatar Image" src={e.thumbnail} />
            </ListItemAvatar>
            <ListItemText
              primary={e.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {"Age " + e.age +" "}
                  </Typography>
                  {"- "}
                  { e.professions.map((e2:any, i2:number) => {
                      return `${e2}, `
                  })}
                </React.Fragment>
              }
            />
          </ListItemButton>
        })}
    </List>

    </Box>
    </Container>
    </div>
}

export default Characters;