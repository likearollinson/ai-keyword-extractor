import { Heading, Image, Text } from "@chakra-ui/react";
import logo from '../assets/digital_brain.png';

const Header = () => {
  return (
    <>
    <Image src={logo} alt='Digital Brain Logo' width={100} margin='1rem'/>
    <Heading color='white' marginBottom='1rem'>
        AI Keyword Extractor
    </Heading>
    <Text fontSize={25} textAlign='center'>
        Paste in your text and it will extract keywords from it.
    </Text>
    </>
  )
};

export default Header;