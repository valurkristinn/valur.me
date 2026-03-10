// Fengið með 
export type CVData = {
  personal: {
    name: string;
    photo: string;
    tagline: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    ssn: string;
  };
  sections?: Record<string, string>;
  experience: {
    title: string;
    company: string;
    period: string;
    description: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
  skills: {
    technical: string[];
    soft: string[];
  };
  languages: {
    name: string;
    level: string;
  }[];
  references: {
    name: string;
    title: string;
    phone: string;
    email: string;
  }[];
}
