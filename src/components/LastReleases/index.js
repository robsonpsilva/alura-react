import {books} from './lastReleasesData';
import styled from 'styled-components';
import { Title } from '../Titulo';
import RecomendationCard from '../RecomendationCard';
import bookImage from '../../images/livro2.png';

const LastReleasesContainer = styled.section `
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooks = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title 
                color="#EB9B00" 
                fontSize = "36px" 
                align="center"
            >Ultimos lançamentos
            </Title>
            <NewBooks>
                {books.map((book) => (
                    <img key={book.id} src={book.src} alt={book.title} />))
                }
            </NewBooks>
            <RecomendationCard 
                title = "Talvez você se interesse por"
                subtitle = "Angular 11"
                description = "Construindo uma aplicação com Angular 11, TypeScript e Firebase"
                imgSrc = {bookImage}
            />  
        </LastReleasesContainer>        
    )
};
export default LastReleases;