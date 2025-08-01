import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    name: "Haircut Only",
    price: "$35",
    duration: "30 mins",
    description: "Classic haircut service including a consultation, wash, cut, and style."
  },
  {
    id: 2,
    name: "Haircut & Beard",
    price: "$45",
    duration: "45 mins",
    description: "Complete grooming package with haircut and beard trim for a polished look."
  },
  {
    id: 3,
    name: "Edge/Line Up",
    price: "$20",
    duration: "20 mins",
    description: "Precise edge and lineup to maintain your style."
  },
  {
    id: 4,
    name: "Kids Cut (ages 12 and below)",
    price: "$25",
    duration: "30 mins",
    description: "Haircut service for children with gentle approach and kid-friendly environment."
  }
];