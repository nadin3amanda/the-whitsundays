import React from "react";
import styled from "styled-components";
import banner from '../Images/Boat.png';


const Banner = () => {
    return(
        <BannerContainer>
            <Title>
            <h3>The </h3>
            <h1>WHITSUNDAYS</h1>
            <h4>a movie that's waiting to be written</h4>
            </Title>
        </BannerContainer>
    );
}

export default Banner;

const BannerContainer = styled.div`
    display: flex;
    width: 100%;
    height: 1100px;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Roboto', sans-serif;
`;

const Title = styled.div`
        width: 450px;
        height: 200px;
        color: white;
        margin: 200px 0px 100px 80px;
        font-weight: 300;

        h1 {
            font-size: 60px;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-top: -30px;
            font-weight: 300;
            
        }

        h3 {
            font-size: 28px;
            margin-left: 60px;
            text-transform: uppercase;
            letter-spacing: 5px;
            font-weight: 300;
        }

        h4 {
            font-size: 22px;
            text-transform: uppercase;
            margin-top: -50px;
            font-weight: 300;
            letter-spacing: 1.5;
        }
`;