import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
//   Button,
//   Box,
} from "@mui/material";

import useNoticias from "../hooks/useNoticias";
import { CATEGORIAS } from "../data";

const Formulario = () => {
  const { categoria, handleChangeCategoria } = useNoticias();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoria</InputLabel>
        <Select
          label="Categoria"
          onChange={handleChangeCategoria}
          value={categoria}
        >
          {CATEGORIAS.map((categoria) => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>
        {/* <Box sx={{marginTop:2}}>
                <Button fullWidth variant='contained' color='primary'>Buscar Noticias</Button>
            </Box> */}
      </FormControl>
    </form>
  );
};

export default Formulario;
