import React from "react";
import styled from "styled-components";

const MiddleBanner = () => {
    return (
        <MiddleBannerContainer>
            <Title>
                    <h3>The </h3>
                    <h1>WHITSUNDAYS</h1>
                    <h4>a movie that's waiting to be written</h4>
            </Title>
            <Description>
                <ul>
                    <li> <h4>Background & Audience </h4> <p>Tourism and Events Queensland wanted to increase consideration of the Whitsundays amongst social fun seekers; digitally savvy consumers
                        that socialise substantially online.</p> </li>
                    <li> <h4>Problem</h4> <p>The Whitsundays is losing its cachet as an isnpirational holiday location.</p> </li>
                    <li> <h4>Objective</h4> <p>Shift perceptions and re-build the Whitsunday's social currency as a world-class destination.</p> </li>
                </ul>
            </Description>
        </MiddleBannerContainer>
    );
}

export default MiddleBanner;

const MiddleBannerContainer = styled.div`
        display: flex;
        width: 100%;
        height: 800px;
        background: rgba(33,82,106,0.5);
`;

const Title = styled.div`
        width: 450px;
        height: 200px;
        color: white;
        margin: 300px 0px 170px 80px;
        font-weight: 300;

        h1 {
            font-size: 60px;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-top: -30px;
            font-weight: 400;
            
        }

        h3 {
            font-size: 28px;
            margin-left: 60px;
            text-transform: uppercase;
            letter-spacing: 5px;
            font-weight: 400;
        }

        h4 {
            font-size: 22px;
            text-transform: uppercase;
            margin: -50px 0px 0px 8px;
            font-weight: 400;
            letter-spacing: 1.5;
        }
`;

const Description = styled.div`
        width: 400px;
        color: white;
        margin: 200px 0px 0px 250px;

        h4 {
            font-size: 32px;
            width 200px;
            font-weight: 400;
        }
        p {
            margin-top: -30px;
            font-size: 12px;
            width: 380px;
        }
        ul {
            display: flex;
            flex-direction: column;
            }

        li {
            list-style-type: none;
            padding: 0px 20px 0px 20px;
        }
`;