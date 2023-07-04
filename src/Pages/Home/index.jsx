import React from 'react';
import * as C from './styles';

const Home = () => {


    return (
        <C.Container>
            <img src="https://github.com/Mateus1508.png" alt="" />
            <C.Description>
                <C.Title>
                    <h3>Olá, sou <span>Desenvolvedor Web</span></h3>
                    <h1>Mateus Belmonte</h1>
                </C.Title>
                <p>Comecei minha trajetória de TI no curso de Redes de computadores, mas ao aprender sobre lógica de programação e sobre como era divertido resolver problemas e criar soluções utilizando códigos resolvi mudar meu curso para Análise e desenvolvimento de sistemas. Na medida em que fui aprendendo sobre linguagens de programação, sobre o que consigo criar com elas, vi que é realmente o que quero para minha vida.</p>
                <C.ButtonsBox></C.ButtonsBox>
                <C.SocialIcons></C.SocialIcons>
            </C.Description>
        </C.Container>
    );
}

export default Home;