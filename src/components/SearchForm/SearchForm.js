import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch} from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {

    const [value, setValue]= useState('')
    const dispatch = useDispatch();

    const handleSearch = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', searchString: value});
    };

    return(
        <form className={styles.searchForm} onSubmit={handleSearch}>
            <TextInput placeholder='Search...' value={value} onChange={e => setValue(e.target.value)}/>
            <Button>
                <span className='fa fa-search'/>
            </Button>
        </form>
    );
};
export default SearchForm;