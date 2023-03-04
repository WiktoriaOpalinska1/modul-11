import styles from './FavoriteCards.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavCards} from '../../redux/store';

const FavoriteCards = () => {
    
    const cards = useSelector(state => getFavCards(state.cards));
    
    return(
        <div className={styles.column}>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} title={card.title}/> )}
            </ul>
        </div>
    );
};

export default FavoriteCards;
