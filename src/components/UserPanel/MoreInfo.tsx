import {
  Box, Flex, Text, Icon,
} from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { GrCafeteria } from 'react-icons/gr';

const MoreInfo: React.FC = () => (
  <Flex direction={['column', null, 'row']} justify="center" mt={10} align="center">
    <Box w="330px" h="240px" p={3} mt={3}>
      <Flex direction="column" align="center">
        <Icon as={GoLocation} boxSize={10} />
        <Text fontSize="24" align="center">The prom will take place at the Sharnbrook Hotel on the [date tbd].</Text>
      </Flex>
    </Box>

    <Box w="330px" h="240px" p={3} mt={3}>
      <Flex direction="column" align="center">
        <Icon as={GrCafeteria} boxSize={10} />
        <Text fontSize="24" align="center">Food will be provided, as well as a non-alcoholic drink upon entry.</Text>
      </Flex>
    </Box>
  </Flex>
);

export default MoreInfo;