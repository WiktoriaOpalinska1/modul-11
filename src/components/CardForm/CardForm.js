import styles from './CardForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const columnId = props.columnId;
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        //Przed zmianą: props.action({title: title} , props.columnId);
        dispatch({ type: 'ADD_CARD', newCard: {columnId, title}});
        setTitle('');
    };
	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;