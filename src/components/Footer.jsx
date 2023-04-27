import { Box, Image, Text, Flex } from '@chakra-ui/react';
import logo from '../assets/OpenAI-Logo-PNG.png';

const Footer = () => {
    return (
        <Box marginTop={50}>
            <Flex justifyContent='center' alignItems='center'>
                <Text>Powered by </Text>
                <Image src={logo} width={130} marginLeft={2} />
            </Flex>
        </Box>
    );
};

export default Footer;
