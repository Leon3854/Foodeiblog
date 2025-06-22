import {Link, NavLink} from 'react-router-dom'
import './Navigation.component.css'
import { useSetBgImages } from '../../../../../shared/src/hooks/set-bg-image/useSetBgImages'
import UnderMenu from './under-menu/UnderMenu'
import React from 'react'


// Типы для пропсов, если они понадобятся
interface NavigationProps {
  // Здесь добавить пропсы, если они нужны
}


const Navigation: React.FC<NavigationProps> =() => {
	useSetBgImages('.set-bg')

	// Массив для меню "Recipes" для избежания дублирования кода
  const recipeMenuItems = [
    { id: 1, image: 'images/temp/megamenu/p-1.jpg', label: 'Vegan', title: 'How to Make a Milkshake With Any Ice Cream...' },
    { id: 2, image: 'images/temp/megamenu/p-2.jpg', label: 'Vegan', title: 'How to Make a Milkshake With Any Ice Cream...' },
    { id: 3, image: 'images/temp/megamenu/p-3.jpg', label: 'Vegan', title: 'How to Make a Milkshake With Any Ice Cream...' },
    { id: 4, image: 'images/temp/megamenu/p-4.jpg', label: 'Vegan', title: 'How to Make a Milkshake With Any Ice Cream...' },
    { id: 5, image: 'images/temp/megamenu/p-5.jpg', label: 'Vegan', title: 'How to Make a Milkshake With Any Ice Cream...' },
  ];

	// Основные пункты меню
  const mainMenuItems = [
    { path: '/main', label: 'Home' },
    { path: '/recipes', label: 'Recipes', hasMegaMenu: true },
    { path: '/dinner', label: 'Dinner' },
    { path: '/desserts', label: 'Desserts' },
    { path: '/pages', label: 'Pages', hasDropdown: true },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

	return(
		<>
		<div className="col-lg-8 col-md-10 order-md-2 order-3">
				<nav className="header__menu">
						<ul>
						{mainMenuItems.map((item) => (
            <li key={item.label} className={item.hasDropdown ? 'dropdown' : ''}>
              {item.path === '/about' || item.path === '/main' ? (
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  end
                >
                  {item.label}
                </NavLink>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}

							{item.hasMegaMenu && (
                <div className="header__megamenu__wrapper">
                  <div className="header__megamenu">
                    {recipeMenuItems.map((recipe) => (
                      <div key={recipe.id} className="header__megamenu__item">
                        <div 
                          className="header__megamenu__item--pic set-bg"
                          data-setbg={recipe.image}
                        >
                          <div className="label">{recipe.label}</div>
                        </div>
                        <div className="header__megamenu__item--text">
                          <h5><Link to="#">{recipe.title}</Link></h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

							{item.hasDropdown && <UnderMenu />}
            </li>
          ))}
						</ul>
				</nav>
		</div>
		</>
	)
}
export default Navigation