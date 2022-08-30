import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 80%;
    margin: auto;
    padding-bottom: 20px;
    h2{
        font-size: 40px;
        letter-spacing: 1px;
        margin-bottom: 30px;
    }
    p{
        font-size: 22px;
        letter-spacing: 1px;
        line-height: 30px;
        margin-bottom: 50px;
    }

    @media (max-width: 1000px){
        width: 90%;
    }
`;