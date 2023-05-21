import { difficulty } from "./difficulty.enum";


export interface Category {
  id: number;
  name: string;
  amount?: number
}



export interface quizProp {
  category: number;
  difficulty: difficulty;
  amount?: number,
  type?: string
}
