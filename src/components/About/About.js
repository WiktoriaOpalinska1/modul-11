import styles from './About.module.scss';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';


const About = () => {
    return(
        <Container className={styles.about}>
            <PageTitle>About</PageTitle>
            <p className={styles.aboutP}>Lorem ipsum.</p>
        </Container>
    );
};

export default About;