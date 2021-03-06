import { Flex, Box, Spacer } from '@chakra-ui/react';
import NavBar from '../Nav/NavBar';
import Banner from './Banner';
import Footer from './Footer';

const HomeLayout: React.FC = ({ children }) => (
  <Flex flexFlow="column nowrap" w="100%" maxW="100%" minH="100vh" boxSizing="border-box" bgColor="gray.100">
    <Box w="100%" zIndex={100}>
      <Banner />
    </Box>
    <Box pos="absolute" w="100%" zIndex={99} pt="40px">
      <NavBar />
    </Box>
    {children}
    <Spacer />
    <Footer />
  </Flex>
);

export default HomeLayout;
