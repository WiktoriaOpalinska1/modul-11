import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';


const ListForm = () => {

    const [title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description}));
        setTitle('');
        setDescription('');
    };
	return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span>Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} /> </span>
            <span>Description: <TextInput value={description} onChange={e => setDescription(e.target.value)} /></span>
            <span><Button className={styles.btn}>Add list</Button></span>
        </form>
	);
};

export default ListForm;