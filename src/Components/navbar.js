import React from "react";
import styled from "styled-components";

const Navbar = () => {
    return (
        <NavContainer>

            <img src={require('../Images/icons8-video-24.png')} width='30' height='30' alt='play-video-icon' />
                <ul>
                    <li><a href='#background'> Background & Challenge </a></li>
                    <li> <a href='#solution'>Solution </a></li>
                    <li> <a href='/'>Results & Effectiveness </a></li>
                    <li> <a href='/'>Slideshow </a></li>
                </ul>
                <DownloadButton><a href='/'> Download Board </a></DownloadButton>
        </NavContainer>
    );
}

export default Navbar;

const NavContainer = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #333333;
    font-size: 10px;
    color: white;
    align-items: center;
    justify-content: center;

    ul {
        display: flex;
        flex-direction: row;
        margin-left: 200px;
        width: 50%;
    }

    li {
        list-style-type: none;
        padding: 0px 20px 0px 20px;
        color: white;
    }

    a {
        text-decoration: none;
        color: white;
    }
`;

const DownloadButton = styled.button`
        border-radius: 5px;
        background-color:#282828;
        width: 100px;
        height: 30px;
        color: white;
        font-size: 10px;
        margin-left: 100px;

        a {
            text-decoration: none;
            color: white;
        }
    :hover {
        cursor: pointer;
        color: white;
    }
`;