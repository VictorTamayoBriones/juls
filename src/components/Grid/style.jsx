import styled from 'styled-components';

export const GridContainer = styled.div`
    width: 100%;
    padding-bottom: 50px;
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
    height: 800px;
    overflow: hidden;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    div{
        &:nth-child(1){
            width: 40%;
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
            width: 60%;
            position: relative;
            div{
                :nth-child(1){
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    @media(max-width:1000px){
        width: 90%;
        height: 500px;
    }

    @media(max-width:617px){
        div{
            &:nth-child(3){
                img{
                    transform: translateY(-0%) !important;
                }
            }
        }
    }

    @media(max-width:471px){
        height: 400px;
        div{
            &:nth-child(3){
                width: 100%;
                position: relative;
                z-index: 1;
            }
        }
    }

    @media(max-width:367px){
        height: 300px;
        div{
            &:nth-child(3){
                img{
                    transform: translateY(-20%) !important;
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