import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 93vh;
  color: ${props => props.theme.backgroundColors.text};
  img {
        border-radius: 50%;
        opacity: 0;
        animation: show 5ms 0.6s forwards; 
    }
`;

export const Title = styled.section`
 flex-direction: column;
    grid-area: name;
    overflow: hidden;
    position: relative;
    &::after{
      animation: text-reveal 2s ease forwards;
      background-color: ${props => props.theme.backgroundColors.background};
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      content: '';
      display: block;
      position: absolute;
    }
    @keyframes text-reveal {
      from { transform: translateX(-101%) }
      to { transform: translateX(101%) }
      
    }
    h1{
        text-align: left;
        font-size: 4em;
        color: ${props => props.theme.defaultColors.blue400};
        opacity: 0;
        animation: show 5ms 0.6s forwards; 
        flex-basis: 100%;
    }
    h3 {
        text-align: left;
        color: ${props => props.theme.backgroundColors.text};
        font-size: 1.5em;
        opacity: 0;
        animation: show 5ms 0.6s forwards; 
        flex-basis: 100%;
        span {
          color: ${props => props.theme.defaultColors.blue400};
        }
      }
    @keyframes show {
      to{
    opacity: 1;
      }
   }
`;

export const Description = styled.section`
    display: flex;
    flex-direction: row;
    max-width: 600px;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px 25px;
    h2 {
        font-size: 2.5rem;
    }
    p {
        font-size: 1.5rem;
        text-align: justify;
    }
`;