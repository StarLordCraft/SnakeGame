import {handleButtonClick, handleClickOutside} from './pause.js'

document.querySelector('.btnMenu').addEventListener('click', handleButtonClick);
document.querySelector('.btnMenu').addEventListener('touchstart', handleButtonClick);