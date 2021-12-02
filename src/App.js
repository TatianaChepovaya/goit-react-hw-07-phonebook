import { ToastContainer } from "react-toastify";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Section from "./components/Section";
import { useSelector } from "react-redux";
import Filter from "./components/Filter";
import Container from "components/Container";

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  return (
    <>
      <Container>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          <Filter />
          {contacts && <ContactsList />}
        </Section>
      </Container>

      <ToastContainer />
    </>
  );
}

export default App;
