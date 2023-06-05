import { Props, Case } from "../Cases"

export const mockItems: Case[] = [
  {
    id: "cawr",
    title: "CAWR",
    category: "commercial",
  },
  {
    id: "retrocade",
    title: "RetroCade",
    category: "personal",
  },
  {
    id: "wolf-pilot",
    title: "Wolf Pilot",
    category: "personal",
  },
]

export const mockData: Props = {
  items: mockItems,
}
