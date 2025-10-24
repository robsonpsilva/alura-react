import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { books } from './SearchData';

const SearchContainer = styled.section`
    background-color: linear-gradient(90deg, #002F52 35%, #326589 100%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`;
const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p{ width: 200px; }
    img { width: 100px; }
    &:hover { border: 2px solid white; }
`
function Search() {
    const [searchedBook, setSearchedBook] = useState([]);
    return (
        <SearchContainer>
            <Title>Ja sabe onde começar</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input 
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const searchTerm = evento.target.value;
                    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
                    setSearchedBook(filteredBooks);
                }}/>
                {searchedBook.map(book => (
                    <Result>
                        <p>{book.title}</p>
                        <img key={book.id} src={book.src} alt={book.title} />
                    </Result>
                ))}
        </SearchContainer>
        
    );
}

export default Search;