import { Container, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box bg='blue.500' color='white' height='100vh' width='100vw' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <Footer />
      </Container>
    </Box>
  )
};

export default App;
