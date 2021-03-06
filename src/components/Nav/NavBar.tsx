import {
  Flex, Spacer, Button, Spinner,
} from '@chakra-ui/react';
import { FiLogIn } from 'react-icons/fi';
import { useUser } from '@supabase/auth-helpers-react';
import { signin } from 'util/authHelpers';
import Image from 'next/image';
import NextLink from 'next/link';
import SignedInMenu from './SignedInMenu';

const NavBar: React.FC = () => {
  const { user, isLoading } = useUser();

  return (
    <Flex direction="row" justify="center" align="center" w="100%" p="5vw" color="black" h="125px">
      <NextLink href="/"><a><Image src="/kimberley_logo.png" height={110} width={110} alt="Logo" /></a></NextLink>
      <Spacer />
      {/* eslint-disable-next-line no-nested-ternary */}
      {isLoading ? <Spinner />
        : user
          ? <SignedInMenu />
          : (
            <Button onClick={signin} leftIcon={<FiLogIn size={16} />}>Sign in</Button>
          )}
    </Flex>
  );
};

export default NavBar;
