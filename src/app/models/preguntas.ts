export class Preguntas{
    constructor(
       
        public id: number,
        public question: string,
        public simple_question: string,
        public answer: string,
        public user_type: string,
        public application_type: string,
        public status: boolean
    )
    {

    }
}