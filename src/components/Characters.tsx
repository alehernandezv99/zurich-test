import React,{useState} from "react";

import {
    List,
    Container,
    Box,
    CircularProgress,
    Pagination,
    Grid
} from "@mui/material";

import CharacterItem from "./pieces/CharacterItem";

import usePagination from "./Pagination";

type Props = {
    data:Array<any>
}

 const Characters:React.FC<Props> = (props) =>{

  let [page, setPage] = useState(1);
  const PER_PAGE = 24;

  const count = Math.ceil(props.data.length / PER_PAGE);

  const _DATA = usePagination([...props.data], PER_PAGE);

  const handleChange = (e:any, p:any) => {
    setPage(p);
    _DATA.jump(p);
  };
  

    return  <div className="characters">
      <Container maxWidth="sm" >
      
      <Box sx={{ bgcolor: 'white', height: '100vh' }} >

        <Grid container justifyContent={"center"} pt={2}>
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
      </Grid>

        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        
        {_DATA.currentData().map((e:any,i:number) => {
          const {name, id, age, professions, thumbnail} = e;
            return  <CharacterItem 
            key={id}
            name={name}
            id={id}
            age={age}
            professions={professions}
            thumbnail={thumbnail}
            />
        })}

    </List>

    </Box>
    </Container>
    </div>
}

export default Characters;