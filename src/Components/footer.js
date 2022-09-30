import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
                <ul>
                    <li><a href='/'> Video </a></li>
                    <li> <a href='/'> Photography </a></li>
                    <li> <a href='/'> Social </a></li>
                    <li> <a href='/'> PR </a></li>
                    <li> <a href='/'> Radio </a></li>
                </ul>

                <VideoContainer>
                    <></>
                </VideoContainer>
                <p>Live reads from NOVA presenters reflected the ever-evolving story of Jake in real-time, and encouraged people to get involved to shape the story themselves.</p>
                <ViewButton><a href='/'> View Project </a></ViewButton>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.div`
        display: flex;
        width: 100%;
        height: 500px;
        background: rgba(33,82,106,1);
        font-family: 'Roboto', sans-serif;
        font-size: 10px;
        align-items: center;
        justify-content: center;

        p {
            width: 190px;
            position: absolute;
            margin: 100px -700px 0px 0px;
            color: white;
        }
        ul {
            display: flex;
            flex-direction: row;
            margin: -90px 0px 0px 100px;
            width: 50%;
            }

         li {
            list-style-type: none;
            padding: 0px 20px 0px 20px;
            color: white;
            width: 40px;
            }

         a {
            text-decoration: none;
            color: white;
            }

         :hover {
            background: #164456;
            border-radius: 6px;
            font-size: 11px;
         }
         
`;

const VideoContainer = styled.div`
        background: black;
        border-radius: 8px;
        width: 250px;
        height: 150px;
        position: absolute;
        margin: 200px 0px 0px -400px;
`;

const ViewButton = styled.button`
        border-radius: 5px;
        background-color:#178bc1;
        width: 100px;
        height: 30px;
        color: white;
        font-size: 10px;
        margin: 300px -600px 0px 0px;
        position: absolute;
        border: none;
        width: 150px;

        a {
            text-decoration: none;
            color: white;
        }
    :hover {
        cursor: pointer;
        color: white;
    }
`;