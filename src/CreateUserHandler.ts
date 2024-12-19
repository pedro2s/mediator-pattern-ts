import { injectable } from "tsyringe";
import { IRequest, IRequestHandler } from "./protocols";
import { CreateUserCommand } from "./CreateUserCommand";

@injectable()
export class CreateUserHandler implements IRequestHandler<CreateUserCommand, string> {
    async handle(request: CreateUserCommand): Promise<string> {
        // Business logic to create a user
        const userId = `user-${Date.now()}`;
        // Here you would normally save the user in a database
        console.log(`Created user ID: ${userId}, with name: ${request.name} and email: ${request.email}`);
        return userId;
    }
}