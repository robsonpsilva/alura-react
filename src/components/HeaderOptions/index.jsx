import styled from 'styled-components'

const MenuOptions = styled.ul `
  display: flex;  
`

const MenuOption = styled.li `
  list-style: none;
  min-width: 120px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`

const textOptions = ['Categorias', 'Minha Estante', 'Favoritos']
function HeaderOptions(){
    return(
        <MenuOptions>
          {textOptions.map((text,index) => (
            <MenuOption key={index}>{text}</MenuOption>
          ))}
        </MenuOptions>
    )
}
    
export default HeaderOptions