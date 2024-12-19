import { IRequest } from "./protocols";

export class CreateUserCommand implements IRequest<string> {
    constructor(public name: string, public email: string){}
}