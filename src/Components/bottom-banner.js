import React from "react";
import styled from "styled-components";

const BottomBanner = () => {
    return (
        <BottomBannerContainer>
            <Description>
            <Title>
                    <h1 id='solution'>solution </h1>
            </Title>
                <Part1>
                <p> We knew movies rated high on the list of our latest target's interest and, with incredible beaches, seaplanes, yachts and glamorous locations, the Whitsundays is the perfect setting for a movie.
                    So we invited Australians to write it: </p>

                    <h4>The Whitsundays.
                    A movie that's awaiting to be written.</h4>

                    <p> We enlisted the world-renowned screenwriter Craig Pearce a Script Supervisor. Then for 20 days, we posted a daily storyboard image on Faceboook and Instagram, inviting the public to write scenes for a chanceto win a $10,000 luxury holiday.</p>
                </Part1>
                <Part2>
                    <p>The campaign launched with a trailer, radio, and online advertising. We reacted to the storyline as it developed, selecting, and treating images according to the previous winning scene.</p>

                    <p>Each scene written and share and became a compelling "ad" for the WhitSundays.</p>

                    <p>Together, Hollywood screen writer and the Australian public had created the worlds first crowd sourced movie storyboard in the store universe with millions of possible permutations.</p>
                </Part2>
            </Description>
        </BottomBannerContainer>
    );
}

export default BottomBanner;

const BottomBannerContainer = styled.div`
        display: flex;
        width: 100%;
        height: 600px;
        background: rgba(33,82,106,0.5);
        font-family: 'Roboto', sans-serif;
        align-items: center;
        justify-content: center;

`;

const Title = styled.div`
        align-items: center;
        width: 100%;
        height: 60px;
        color: white;
        margin: -200px 0px 0px 100px;
        font-weight: 300;
        position: absolute;

        h1 {
            text-align: center;
            font-size: 60px;
            text-transform: Capitalize;
            letter-spacing: 2px;
            font-weight: 400;
            margin: 0 auto;
            
        }

`;

const Description = styled.div`
        display: flex;
        width: 100%;
        height: 300px;
        color: white;
        margin: 200px 400px 0px 300px;
        align-items: center;
        justify-content:center;
        z-index: 10;
        position: absolute;
        vertical-align: middle;
        
`;

const Part1 = styled.div`
    width: 350px;
    height: 150px;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    padding: 20px 20px 0px 20px;
    
`;
const Part2 = styled.div`
    width: 350px;
    height: 150px;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    padding: 20px 20px 0px 20px;
    

`;