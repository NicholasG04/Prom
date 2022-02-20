import { Flex, Box, Spacer } from '@chakra-ui/react';
import NavBar from '../Nav/NavBar';
import Footer from './Footer';

const BaseLayout: React.FC = ({ children }) => (
  <Flex flexFlow="column nowrap" w="100%" maxW="100%" minH="100vh" boxSizing="border-box" bgColor="gray.100">
    <Box w="100%">
      <NavBar />
    </Box>
    {children}
    <Spacer />
    <Footer />
  </Flex>
);

export default BaseLayout;
