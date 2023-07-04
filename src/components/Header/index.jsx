import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiHomeAlt2 } from 'react-icons/bi';
import { AiTwotoneExperiment } from 'react-icons/ai';
import { BsCodeSlash, BsFileEarmarkCode } from 'react-icons/bs';
import * as C from './styles';

const Header = ({ toggleTheme }) => {
    const [activeNav, setActiveNav] = React.useState('#');
    return (
        <C.Container>
            <h1>Mateus Belmonte</h1>
            <C.NavItems>
                <NavLink to='/'
                    onClick={() => setActiveNav('#')}
                    className={activeNav === '#' ? 'navItem active' : 'navItem'}>
                    <BiHomeAlt2 className="navIcon" />
                    <span>Home</span>
                </NavLink>
                <NavLink to='/projects'
                    onClick={() => setActiveNav('#projects')}
                    className={activeNav === '#projects' ? 'navItem active' : 'navItem'}>
                    <BsFileEarmarkCode className="navIcon" />
                    <span>Projetos</span>
                </NavLink>
                <NavLink
                    onClick={() => setActiveNav('#experiences')}
                    className={activeNav === '#experiences' ? 'navItem active' : 'navItem'}
                    to='/experiences'>
                    <AiTwotoneExperiment className="navIcon" />
                    <span>Experiências</span>
                </NavLink>
                <NavLink
                    onClick={() => setActiveNav('#abilitys')}
                    className={activeNav === '#abilitys' ? 'navItem active' : 'navItem'}
                    to='/abilitys'>
                    <BsCodeSlash className="navIcon" />
                    <span>Habilidades</span>
                </NavLink>
                <C.ThemeBtn onClick={toggleTheme}>Mudar tema</C.ThemeBtn>
            </C.NavItems>
        </C.Container>
    );
}

export default Header;