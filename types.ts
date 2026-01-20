
export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface EligibilityCriterion {
  id: number;
  label: string;
  value: string;
}

export interface FormData {
  name: string;
  mobile: string;
  city: string;
  profession: string;
}
