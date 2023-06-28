import { dentists } from "./types";
import IndividualDentist from "../components/DentistSinglePage";

export const initialDentist: dentists = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

export const renderDentist: (dentist: dentists) => JSX.Element | undefined = (
  dentist
) => {
  if (dentist) {
    const { name, username, phone, email, address, website, company, id } =
      dentist;
    const { name: companyName } = company;
    const { city, street } = address;
    return (
      <IndividualDentist
        id={id}
        name={name}
        username={username}
        phone={phone}
        email={email}
        city={city}
        street={street}
        website={website}
        companyName={companyName}
      />
    );
  }
};
