import {books} from './lastReleasesData';
import styled from 'styled-components';
import { Title } from '../Titulo';

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
            <Title color="#000">Ultimos lançamentos</Title>
            <Title >Ultimos lançamentos</Title>
            <NewBooks>
                {books.map((book) => (
                    <img key={book.id} src={book.src} alt={book.title} />))
                }
            </NewBooks>     
        </LastReleasesContainer>        
    )
};
export default LastReleases;