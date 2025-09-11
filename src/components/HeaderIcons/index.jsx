import profile from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'
import './style.css'
const icons = [profile, bag]
function HeaderIcons(){
    return (
        <ul className='menu-icons'>
          {
            icons.map((icon) => (
              <li className='menu-icon'>
                <img src={icon}>
                </img>
              </li>
            ))
          }
        </ul>
    )
}

export default HeaderIcons