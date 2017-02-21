import { Task } from '../task';
export class Person {
    constructor(
        public id?: number,
        public name?: string,
        public task?: Task,
    ) { }
}
