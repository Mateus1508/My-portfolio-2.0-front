import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    background-color: ${props => props.theme.headerColors.background};
    color: ${props => props.theme.headerColors.text};
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.headerColors.border};
    h1 {
        margin-left: 20px;
        color: ${props => props.theme.headerColors.text};
    }
`;

export const ThemeBtn = styled.button`
    color: ${props => props.theme.defaultColors.white};
    background-color: ${props => props.theme.defaultColors.blue400};
    border: 1px solid ${props => props.theme.defaultColors.blue200};
    padding: 10px;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.defaultColors.blue600};
    }
`;

export const NavItems = styled.ul`
    display: flex;
    gap: 30px;
    align-items: center;
    height: 100%;
    margin-right: 20px;
    span {
        font-size: 18px;
        color: ${props => props.theme.headerColors.text};
    }
    .navIcon {
        display: none;
        color: ${props => props.theme.defaultColors.blue400};
    }
    .navItem {
        width: 80px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-decoration: none;
        font-size: 18px;
        &:hover {
            border-bottom: 1px solid ${props => props.theme.defaultColors.blue300}; 
        }
    }
    .active {
        border-bottom: 3px solid ${props => props.theme.defaultColors.blue400}; 
        span {
            display: none;
        }
        .navIcon {
            font-size: 32px;
            display: block;
        }
    }
`;