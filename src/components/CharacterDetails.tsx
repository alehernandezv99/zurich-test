import React, {useState} from "react";

import {useParams} from "react-router-dom"

import {
    Container,
    Box,
    Typography,
    Avatar,
    Grid,
    Divider,
    Tab,
    Tabs,
    Chip,
    Stack

} from "@mui/material";

import TabPanel from "./pieces/TabPanel";

type Props = {
    /*
 age:number,
 friends:Array<string>,
 hair_color:string,
 height:number,
 id:number,
 name:string,
 professions:Array<string>,
 thumbnail:string,
 weight:number
 */
 data:Array<any>
}


function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const CharacterDetails:React.FC<Props> = props => {

    const [value, setValue] = React.useState(0);

    const params = useParams();

    const id = params.id;

    const user = props.data[Number(id)]; 


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

   

    return <div className="character-details">

        <Container maxWidth="sm">
            
            <Box sx={{ bgcolor: 'white', height: '100vh' }} p={2} >
                {props.data.length > 0?<>
                 
                 <Grid container justifyContent={"center"} alignItems="center" direction={"column"}>
                     
                         <Avatar sx={{ height: '100px', width: '100px' }} alt={user.name} src={user.thumbnail}  sizes="200px"/>
                          
                          <Typography mt={2} variant="h5">{user.name}</Typography>

                          <Typography variant="body1">{user.age} Years old</Typography>
                 </Grid>

                 <Box sx={{ width: '100%' }} mt={2}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Friends" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        
        <Typography variant="h5">Basic Details</Typography>

        <Grid container mt={2}>
            <Grid sm={6} xs={6}>
                <Typography >Height</Typography>
            </Grid>

            <Grid sm={6} xs={6}>
                <Typography color={"primary"}>{user.height}</Typography>
            </Grid>
        </Grid>

        <Grid container mt={2}>
            <Grid sm={6} xs={6}>
                <Typography >Weight</Typography>
            </Grid>

            <Grid sm={6} xs={6}>
                <Typography color={"primary"}>{user.weight}</Typography>
            </Grid>
        </Grid>

        <Grid container mt={2}>
            <Grid sm={6} xs={6}>
                <Typography >Hair Color</Typography>
            </Grid>

            <Grid sm={6} xs={6}>
                <Typography color={"primary"}>{user.hair_color}</Typography>
            </Grid>
        </Grid>

        <Typography mt={3} variant="h5">Other</Typography>

        <Grid container mt={2}>
            <Grid sm={12}>
                <Typography >Professions</Typography>

                <Stack direction="row" flexWrap={"wrap"} spacing={0}>
                        {user.professions.map((e:string, i:number) => {
                            return <Box key={i} pr={1} mt={1}>
                                <Chip label={e} variant="outlined" color="primary" size="small"/>
                            </Box>
                        })}
                 </Stack>
            </Grid>

            
        </Grid>



      </TabPanel>
      <TabPanel value={value} index={1}>
        Friends
      </TabPanel>
 
    </Box>
               
                 </>:<div>Loading...</div>}
            </Box>
        </Container>
    </div>
}

export default CharacterDetails;