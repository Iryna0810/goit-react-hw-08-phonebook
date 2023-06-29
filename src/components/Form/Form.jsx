import {useState} from 'react';
import { Input, FormWrapper } from '../styled';
import { useDispatch, useSelector } from "react-redux";
import {addContactsThunk} from 'components/redux/thunk'
import { selectContacts } from '../redux/selectors';
import { FormLabel, Button } from '@chakra-ui/react';


export const Form = () => {

  const contacts = useSelector(selectContacts);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contact = {
    name: name,
    phone: phone,
  };

  const dispatch = useDispatch();
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    const nameCheck = contacts.filter(contact => contact.name.toLowerCase() === normalizedName);

    if (nameCheck.length >= 1) {
      return alert(`${name} is already in contacts`)
    }

    dispatch(addContactsThunk(contact))
    reset();
  }

  const handleInputChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value)
    if (name === 'phone') setPhone(value)
  }


  const reset = () => {
    setName('');
    setPhone('');
  }

  return <FormWrapper action="" onSubmit={handleSubmit}>
    <FormLabel>Name
      <Input
        type="text"
        name="name"
        value={name}
        placeholder="type your name"
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}>
      </Input>
    </FormLabel>
    <FormLabel>Phone
      <Input
        type="tel"
        name="phone"
        value={phone}
        placeholder="type your phone"
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}>
        </Input>
    </FormLabel>
    <Button bgColor="blue.100" type="submit">Add contacts</Button>
  </FormWrapper>
};