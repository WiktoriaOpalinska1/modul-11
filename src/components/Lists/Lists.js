import styles from './Lists.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/store';

const Lists = () => {

    const lists = useSelector(getAllLists);
  
    return(
      <section className={styles.lists}>
        {lists.map( list => ( 
          <NavLink key={list.id} to={'/list/' + list.id} className={styles.listLink}>
            <h3>{list.title}</h3>
            <p>{list.description}</p>
          </NavLink> ))}
      </section >
    );
  };
  
  export default Lists;