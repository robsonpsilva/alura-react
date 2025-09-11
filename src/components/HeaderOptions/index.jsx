import './style.css'
const textOptions = ['Categorias', 'Minha Estante', 'Favoritos']
function HeaderOptions(){
    return(
        <ul className='menu-options'>
          {textOptions.map((text) => (
            <li className='menu-option'>{text}</li>
          ))}
        </ul>
    )
}
    
export default HeaderOptions