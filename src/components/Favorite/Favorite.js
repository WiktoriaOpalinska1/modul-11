import styles from './Favorite.module.scss';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';


const Favorite = () => {
    return(
        <Container>
            <PageTitle>Favorite</PageTitle>
            <p className={styles.favP}>Lorem ipsum.</p>
        </Container>
    );
};

export default Favorite;