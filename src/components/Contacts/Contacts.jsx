import React, { useEffect } from 'react';
import { Button, Flex, Text, VStack} from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux";
import { selectVisibleContacts, selectIsLoading, selectError} from '../redux/selectors'
import { getContactsThunk, deleteContactsThunk } from 'components/redux/contact-thunk';
import Loader from 'components/Loader/Loader'

export const Contacts = () => {
    const visibleContacts = useSelector(selectVisibleContacts)
    const loading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getContactsThunk())
    }, [dispatch])
   

    const handleDelete = (id) => {
        dispatch(deleteContactsThunk(id))
    };
   

    // eslint-disable-next-line no-lone-blocks
    {
        return <>
            {loading && <Loader />}
            {error && <p>Something went wrong. Try again later</p>}
            <VStack
            w="full"
                            h="full" p={10}
                            spacing={10}
                            alignItems="center"
            > {visibleContacts &&
                visibleContacts.map(({ name, id, phone }) =>
            <Flex justifyContent="space-between" gap="auto" p="2" border ="1px solid blue" borderRadius="3xl" key={id}>
            <Text>{name}</Text>
            <Text>{phone}</Text>
            <Button bgColor="blue.100" type="submit"
                onClick={() => handleDelete(id)}
            >Delete</Button>
        </Flex>)}
            </VStack>
            </>
    }
}

