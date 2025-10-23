import profile from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'
import styled from 'styled-components'
const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`
const Icons = styled.ul `
  display: flex;
  align-items: center;
  list-style: none;
  cursor: pointer;
`
const icons = [profile, bag]
function HeaderIcons(){
    return (
        <Icons>
          {
            icons.map((icon, index) => (
              <Icon key={index}>
                <img src={icon} alt='Icon Description'>
                </img>
              </Icon>
            ))
          }
        </Icons>
    )
}

export default HeaderIcons