import styles from './Favorite.module.scss';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import FavoriteCards from '../FavoriteCards/FavoriteCards';
import { useSelector } from 'react-redux';
import { getFavCards} from '../../redux/store';
import { Navigate } from 'react-router-dom';


const Favorite = () => {

    const cards = useSelector(state => getFavCards(state.cards));
    
    if(cards.length === 0) return <Navigate to="/" />
    return(
        <Container className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <FavoriteCards className={styles.column} />
        </Container>
    );
};

export default Favorite;