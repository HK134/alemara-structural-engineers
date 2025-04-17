
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategories {
  general: FAQItem[];
  buildingControl: FAQItem[];
  planning: FAQItem[];
  other: FAQItem[];
}
