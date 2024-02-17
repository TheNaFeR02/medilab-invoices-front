type CustomerDetails = {
  name: string;
  NIT: string;
  phone: string;
  email: string;
  address: string;
  Location: string;
};

type FacturationAddress = {
  address: string;
  location: string;
};

export type Customer = {
  id: number;
  customer: {
    CustomerDetails: CustomerDetails;
    FacturationAddress: FacturationAddress;
    TaxRetention: number;
  };
};

