import { Box, Heading, VStack, HStack, Center, Text, Image } from "@chakra-ui/react";

import Seemore from "../Seemore";

export function GeneralOrientations() {
    return (
        <Center
            my="06" mx="auto" px="6"
            w="100%"
            bgColor=""
        >
            <VStack spacing="10">
                <Box>
                    {/* <Seemore color="green.500" 
                        fontSize="3xl" 
                        maxW="900" 
                        colorRD="green.600"
                        fontSizeRD="1xl"
                        >
                        O InovAmazonPI é uma plataforma totalmente gratuita que tem 
                        como objetivo demonstrar por meio de simulações e estudo dirigido, 
                        o passo a passo para depósito de pedido de patente.
                    </Seemore> */}
                    <Text color="green.500" 
                        fontSize="3xl" 
                        maxW="900" 
                        fontWeight="bold" 
                        textAlign="center"
                        >
                        O InovAmazonTT é uma plataforma totalmente gratuita que tem como 
                        objetivo orientar de maneira clara, um passo a passo para o processo 
                        de averbação e/ou registro do contrato de transferência de tecnologia.
                    </Text> 
                </Box>

                <Box>
                    <Text 
                        fontSize="2xl" 
                        color="green.800" 
                        textAlign="center" 
                        maxW="1000"
                        colorRD="green.900"
                        fontSizeRD="1xl"
                        >
                        O produto InovAmazonTT é fruto de trabalho de doutorado 
                        em Biotecnologia da Universidade Federal do Amazonas
                    </Text>
                </Box>

                <Box>
                    <Text fontSize="4xl" color="green.600" fontWeight="bold">
                        Tempo Médio
                    </Text>
                </Box>

                <Box>
                    <Image src="https://files.comunidades.net/rtvminas/timeline.png"/>    
                </Box>

                <Box>
                    <Text fontSize="4xl" color="green.600" fontWeight="bold">
                        Valores
                    </Text>
                </Box>

                <Box>
                    <HStack spacing="10">
                    <VStack shadow="md" borderWidth="1px" p="2" bgColor="green.100" borderRadius="5px">
                        <Heading fontSize="3xl">
                            R$ 00,00
                        </Heading>
                        <Text>
                            Descrição Respectiva
                            <br/> .
                            <br/> .
                            <br/> .
                            <br/> .
                        </Text>
                    </VStack>

                    <VStack shadow="md" borderWidth="1px" p="2" bgColor="green.100" borderRadius="5px">
                        <Heading fontSize="3xl">
                            R$ 00,00
                        </Heading>
                        <Text>
                            Descrição Respectiva
                            <br/> .
                            <br/> .
                            <br/> .
                            <br/> .
                        </Text>
                    </VStack>
                </HStack>
                </Box>
            </VStack>
        </Center>
    )
}