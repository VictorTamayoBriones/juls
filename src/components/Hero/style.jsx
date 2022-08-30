import styled from 'styled-components';

export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
`

export const Description = styled.div`
    width: 40%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    button{
        cursor: pointer;
        padding: 5px 15px;
        width: max-content;
        background: none;
        border: solid 3px #000;
        border-radius: 3px;
        font-size: 22px;
        animation: btnEfect 1.5s infinite cubic-bezier(0, 0, 0, -0.01);
    }


    @keyframes btnEfect {
        0%{
            box-shadow: 2px 0px 0px  #000;
        }
        50%{
            box-shadow: 0px 0px 0px 6px #00000010;
        }
    }
`;

export const SectionTitle = styled.div`
    width: 100%;

    h1{
        width: max-content;
        padding: 5px 15px;
        border: solid 3px #000;
        border-radius: 3px;
        letter-spacing: 2px;
        font-size: 100px;
    }

    span{
        display: block;
        color: #666666;
        margin: 10px 0;
        font-size: 22px;
    }

`;

export const Desc = styled.div`
    width: 90%;
    p{
        font-size: 33px;
        letter-spacing: 1px;
        line-height: 40px;
    }
`

export const ImageContainer= styled.div`
    width: 60%;
    img{
        width: 100%;
    }
`;