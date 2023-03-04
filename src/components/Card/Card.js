import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();
   
    return(
        <li className={styles.card}>{props.title}
            <button onClick={() => dispatch(toggleCardFavorite(props.id))}>
                <i className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)}></i>
            </button>
            <button onClick={()=> dispatch(removeCard(props.id))}>
                <i className='fa fa-trash'></i>
            </button>
        </li>
    );
};

export default Card; 
