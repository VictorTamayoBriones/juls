import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    padding: 15px;
    justify-content: space-around;
    background: #000;
    color: #fff;
    letter-spacing: 1px;

    @media(max-width: 600px){
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;