import styled from 'styled-components';

const FistBlock = styled.div`
    width: calc(100%/3);
    p {
        font-family: 'Cedarville Cursive', cursive;
        color: #98BD95;
        font-size: 35px;
        margin: 0px;
        font-weight: none;
    }
`;
const Skills = styled.div`
    width: calc(100%/3);
    li {
        list-style: none;
        font-size: 14px;
        font-family: 'Nunito', sans-serif;
        color: #366165;
    }
    ul {
        padding-inline-start: 0;
    }
`;

const BrainImg = styled.img`
    width: 100%;
    margin-left: 5%;
`;

const SkilImg = styled.img`
    width: 7%;
    text-align:center;
`;
export {
    Skills, 
    BrainImg,
    FistBlock,
    SkilImg,
};