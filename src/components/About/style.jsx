import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 80%;
    height: 500px;
    margin: auto;
    padding-bottom: 20px;
    h2{
        font-size: 40px;
        letter-spacing: 1px;
        margin-bottom: 30px;
    }
    p{
        width: 50%;
        font-size: 22px;
        letter-spacing: 1px;
        line-height: 30px;
        margin-bottom: 50px;
    }

    .body{
        display: flex;
        position: relative;
        .image{
            height: 350px;
            width: 50%;
            display: flex;
            position: absolute;
            right: 0;
            top: -20%;
            justify-content: center;
            
            img{
                width: auto;
            }
        }
    }

    @media (max-width: 1000px){
        width: 90%;
    }

    @media (max-width: 600px){
        height: auto;
        .body{
            flex-direction: column;
            p{
                width: 100%;
            }
            .image{
                width: 100%;
                position: static;
            }
        }
    }
`;