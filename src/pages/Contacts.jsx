import { Form } from "../components/Form/Form";
import { Title } from '../components/Title/Title';
import { Contacts } from "../components/Contacts/Contacts";
import { Filter } from "../components/Filtter/Filter";
import { Container, Flex, VStack } from "@chakra-ui/react"


const ContactsList = () => {    
    return(
     <Container p={10}>
            <Flex py={10}>
                <VStack w="full"
                    h="full" p={10}
                    spacing={10}
                    alignItems="center"
                bg="blue.50"
                >
      <Title title='Phonebook'></Title>
      <Form/>
      <Title title="Contacts"></Title>
      <Filter/>
      <Contacts/>
            </VStack>
            </Flex>
            
        </Container>


        )
}
    export default ContactsList