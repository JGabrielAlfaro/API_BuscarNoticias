// import axios from "axios";
import { useState,useEffect,createContext } from "react";

const NoticiasContext = createContext()


const NoticiasProvider = ({children}) => {
    const [categoria,setCategoria] = useState('general');
    const [noticias,setNoticias] = useState([])
    const [pagina,setPagina] = useState(1)
    const [totalNoticias,setTotalNoticias] = useState(0)



 
    useEffect(()=>{
        const consultarAPI = async () => {
            // &pageSize=100 o page=2
             const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            // const {data} = await axios(url);
            
            const respuesta = await fetch(url)
            const data = await respuesta.json();
         
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
            setPagina(1) //Por si hay un cambio de categoria
        }
        consultarAPI();
    },[categoria])

    useEffect(()=>{
      const consultarAPI = async () => {
          // &pageSize=100 o page=2
          const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
          // const {data} = await axios(url);

          const respuesta = await fetch(url)
          const data = await respuesta.json();
  
          setNoticias(data.articles)
          setTotalNoticias(data.totalResults)
      }
       consultarAPI();
  },[pagina])



    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    const handleChangePagina = (e,valor) => {
      setPagina(valor) //en vez de e.target.textContent
    }
  return (
    <div>
      <NoticiasContext.Provider
        value={{
            categoria,
            handleChangeCategoria,
            noticias,
            totalNoticias,
            handleChangePagina,
            pagina
        }}
      >
        {children}
      </NoticiasContext.Provider>
    </div>
  )
}

export {
    NoticiasProvider
}

export default NoticiasContext;