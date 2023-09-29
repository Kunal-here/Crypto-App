import { Box, Spinner, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack h={'90vh'} justifyContent={'center'} >
      <Box transform={"scale(2)"}>
        <Spinner size={'xl'} />
      <Text>Loading...</Text>
      </Box>
    </VStack>
  )
}

export default Loader