import styled from 'styled-components';

export const GridContainer = styled.div`
    width: 100%;
    height: 100vh;
    h2{
        width: max-content;
        margin: 50px auto;
        text-align: center;
        font-size: 40px;
        letter-spacing: 1px;
        border-bottom: solid 1px #000;
    }
`;

export const GridComponent = styled.div`
    width: 80%;
    height: 600px;
    overflow: hidden;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    div{
        &:nth-child(1){
            width: 30%;
            display: flex;
            flex-direction: column;
            background: #000;
            flex-wrap: wrap;
            div{
                &:nth-child(1), &:nth-child(2){
                    width: 100%;
                }
                &:nth-child(3){
                    img{
                        transform: translateY(-50%);
                    }
                }
            }
        }
        &:nth-child(2){
            width: 70%;
            div{
                :nth-child(1){
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;

export const GridItem = styled.div`
    width: 100%;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;