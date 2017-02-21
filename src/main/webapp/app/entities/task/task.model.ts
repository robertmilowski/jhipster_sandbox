import { Person } from '../person';
export class Task {
    constructor(
        public id?: number,
        public name?: string,
        public priority?: number,
        public startDate?: any,
        public person?: Person,
    ) { }
}
