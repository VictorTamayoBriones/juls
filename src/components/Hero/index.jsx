import { Desc, Description, HeroContainer, ImageContainer, SectionTitle } from "./style"
import MainImage from '../../assets/img-main.jpg';
import { useEffect, useState } from "react";

function Hero() {

  const[height, setHeight]=useState(0);

  useEffect(()=>{
    const currentViewportHeight = window.innerHeight;
    setHeight(currentViewportHeight);
  }, [])

  return (
    <HeroContainer>
        <Description>
            <SectionTitle>
                <h1>JULS</h1>
                <span>Ropa y Artículos Exclusivos</span>
            </SectionTitle>
            <Desc>
                <p>Sé la unión perfecta entre el diseño, la innovación, el ingenio, y tú esencia... <br />
                ¿Quién realmente quieres ser?... <br /> Sé JULS</p>
            </Desc>
            <button onClick={ ()=>window.scroll(0, height)} >Know more</button>
        </Description>

        <ImageContainer>
          <img src={ MainImage } alt="" />
        </ImageContainer>
    </HeroContainer>
  )
}
export default Hero