import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {

    const dispatch = useDispatch();
   
    return(
        <li className={styles.card}>{props.title}
            <button onClick={() => dispatch(toggleCardFavorite(props.id))}><i className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)}></i></button>
        </li>
    );
};

export default Card; 
