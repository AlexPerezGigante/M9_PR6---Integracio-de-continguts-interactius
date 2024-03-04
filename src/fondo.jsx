import fotoFondo from '/common-bg.svg'

function Fondo(){
    const style = {
       background: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url('+fotoFondo+')'
    }
    return(
        style
    )
}

export default Fondo