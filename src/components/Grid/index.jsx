import G1 from '../../assets/g-1.jpg';
import G2 from '../../assets/g-2.jpg';
import G3 from '../../assets/g-3.jpg';
import G4 from '../../assets/g-4.jpg';
import { GridComponent, GridContainer, GridItem } from './style';

export const Grid = () =>{
    return(
        <GridContainer>
            <h2>Nuestro estilo</h2>
            <GridComponent>
                <div>
                    <GridItem>
                        <img src={ G4 } alt="" />
                    </GridItem>

                    <GridItem>
                        <img src={ G3 } alt="" />
                    </GridItem>

                    <GridItem>
                        <img src={ G2 } alt="" />
                    </GridItem>
                </div>
                <div>
                    <GridItem>
                        <img src={ G1 } alt="" />
                    </GridItem>
                </div>
            </GridComponent>
        </GridContainer>
    )
}