import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Breno Angelo</Text>
          <Text color="gray.300" fontSize="small">
            brenoangeloal@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Breno Angelo"
        src="https://github.com/brenoangelo.png"
      />
    </Flex>
  );
}
