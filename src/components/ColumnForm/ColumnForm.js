import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm = props => {
    const listId = props.listId;
    const [title, setTitle] = useState('');
    const[icon, setIcon] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
    };
	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} /> </span>
            <span>Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} /></span>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;