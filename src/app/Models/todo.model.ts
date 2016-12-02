export class Todo {
  constructor(
    public Description: string,
    public IsComplete: boolean,
    public Id?:number,
    public CategoryId?: number
  ){}
}
