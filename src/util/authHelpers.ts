import { createStandaloneToast } from '@chakra-ui/react';
import { supabaseClient as supabase } from '@supabase/auth-helpers-nextjs';

export const signin = async (): Promise<void> => {
  const toast = createStandaloneToast();
  const { error, user } = await supabase.auth.signIn({
    provider: 'azure',
  }, {
    scopes: 'email',
    redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
  });

  if (error) {
    toast({
      status: 'error',
      title: error?.message ?? 'Sign in failed',
    });
  } else if (user) {
    toast({
      status: 'success',
      title: 'Sign in successful',
    });
  }
};

export const signout = async (): Promise<void> => {
  const toast = createStandaloneToast();
  const { error } = await supabase.auth.signOut();
  if (error) {
    toast({
      status: 'error',
      title: error?.message ?? 'Sign out failed',
    });
  } else {
    toast({
      status: 'success',
      title: 'Sign out successful',
    });
  }
};
