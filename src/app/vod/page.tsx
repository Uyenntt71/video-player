import { Box } from "@chakra-ui/react";

export default function Vod() {
  return (
    <Box p="2" h="88vh" w="100%">
      <Grid
      border={'md'}
      templateRows={`repeat(${rowSpan}, 1fr)`}
      w='full'
      h='full'
    >
    </Box>
  );
}
