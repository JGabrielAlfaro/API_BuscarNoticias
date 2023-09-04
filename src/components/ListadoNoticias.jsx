import { Grid,Typography,Pagination,Stack } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia";

const ListadoNoticias = () => {
    const {noticias,totalNoticias,handleChangePagina,pagina} = useNoticias();
    const totalPaginas = Math.ceil(totalNoticias / 20);//redondea hacia arriba, la cantidad maxima que trae son 20 por lo queda estatico
   

  return (
    <>
      <Typography
        textAlign={'center'}
        marginY={5}
        variant="h4"
        component={'h2'}

      >
        Últimas Noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias?.map( (noticia,id) => 
           noticia?.urlToImage && (
              <Noticia noticia={noticia} key={id}/>
           )
          )}
      </Grid>

      <Stack 
        spacing={2}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          marginY:5
        }}
      >
          <Pagination 
            count={totalPaginas} 
            variant="outlined" 
            color="primary"
            onChange={handleChangePagina}
            page={+pagina} //PASO a integer
         />
      </Stack>
    </>
  )
}

export default ListadoNoticias
