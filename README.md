# Foodeiblog

## Технологии
- Язык: TypeScript
- Фреймворк: NestJS, React, Vite
- База данных: PostgreSQL
- ORM: Prisma
  
## Источник
- Template Name: Foodeiblog
- Description:  Foodeiblog Blog HTML Template
- Author: Colorlib
- Author URI: https://colorlib.com
- Version: 1.0
- Created: Colorlib

## Измения
В этом проекте переделал функциональность, ранее реализованную с использованием jQuery, на хуки TypeScript для React с использованием Vite.
- Превел и разбил весь шаблон на отдельные компоненты для работы с React (возможно дальнейшее дробление на отдельные компоненты)-в процессе 
- useHamburgerMenu - нуже для работы с кнопкой меню 
- Preloader -- хук для показа и скрытия прелоадара при перегрузки страницы и при переходе на другие страницы 
- useSetBgImages -- данный хук нужен для того что бы в div добавлять атрибут который будет содержать путь до картинки которая будет выплнять фоном для дива 
