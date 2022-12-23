import { Component } from 'react';
import Notiflix from 'notiflix';
import { GlobalStyleComponent } from 'styles/GlobalStyles';

import AddContactForm from './AddContactForm/AddContactForm';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import { Container } from './Container/Container.styled';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    // filter: '',
    query: '',
    data: [],
    largeImageURL: '',
    alt: '',
  };

  // countTotalContacts = () => {
  //   const { contacts } = this.state;
  //   return contacts.length;
  // };

  // deleteContact = contactId => {
  //   const { contacts } = this.state;

  //   for (const contact of contacts) {
  //     if (contact.id === contactId) {
  //       Notiflix.Notify.success(`"${contact.name}" successfully deleted`);
  //     }
  //   }

  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(el => el.id !== contactId),
  //   }));
  // };

  formSubmitHandler = searchQuery => {
    this.setState({
      query: searchQuery,
    });
  };

  onImageClick = (largeImageURL, alt) => {
    this.setState({ largeImageURL, alt });
  };

  // changeFilter = event => {
  //   this.setState({ filter: event.currentTarget.value });
  // };

  render() {
    // const { contacts, filter } = this.state;
    // const normalizedFilter = filter.toLowerCase();
    // const filteredContacts = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter)
    // );

    return (
      <>
        <SearchBar onSubmit={this.formSubmitHandler} />
        <ImageGallery data={this.state.data} onImageClick={this.onImageClick} />
        <Container>
          {/* <Section title="Phonebook">
          <AddContactForm onSubmit={this.formSubmitHandler} />
          <ContactFilter filter={filter} onChange={this.changeFilter} />
        </Section>
        <Section title="Contacts">
          {this.countTotalContacts() ? (
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <Notification message="There is no contacts" />
          )}
        </Section> */}
        </Container>
        <GlobalStyleComponent />
      </>
    );
  }
}
