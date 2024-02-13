export type Customer = {
  id: number;
  customer: {
    CustomerDetails: {
      name: string;
      NIT: string;
      phone: string;
      email: string;
      address: string;
      Location: string;
    };
    FacturationAddress: {
      address: string;
      location: string;
    };
    TaxRetention: number;
  };
}

// its not been using right now
export const customer = {
  id: 1,
  customer: {
    CustomerDetails: {
      name: "Medilaboral Salud y Seguridad Laboral",
      NIT: "4-9008367263",
      phone: "+57 3014072140",
      email: "contabilidad@medilaboral.com",
      address: "Calle 100 # 52 -20",
      Location: "Bogotá, Colombia"
    },
    FacturationAddress: {
      address: "Calle 100 # 52 -20",
      location: "Bogotá, Colombia"
    },
    TaxRetention: 0.02,
  }
};

