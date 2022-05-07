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

type CharacterItemProps = {
  id:number,
  thumbnail:string,
  name:String,
  professions:Array<string>,
  age:number
}


const CharacterItem:React.FC<CharacterItemProps> = props => {

    const navigate = useNavigate()

    const handleClick = (id:string) => {

      return () => {
      navigate(`/character/${id}`)
      }
    }

    return <ListItemButton alignItems="flex-start" key={props.id} onClick={handleClick(String(props.id))}>
    <ListItemAvatar>
      <Avatar alt="Avatar Image" src={props.thumbnail} />
    </ListItemAvatar>
    <ListItemText
      primary={props.name}
      secondary={
        <React.Fragment>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {"Age " + props.age +" "}
          </Typography>
          {"- "}
          { props.professions.map((e2:any, i2:number) => {
              return `${e2}, `
          })}
        </React.Fragment>
      }
    />
  </ListItemButton>
}

export default CharacterItem