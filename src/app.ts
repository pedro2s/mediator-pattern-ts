import 'reflect-metadata';
import { container } from 'tsyringe';
import { CreateUserHandler } from './CreateUserHandler';
import { IMediator } from './protocols';
import { Mediator } from './mediator';
import { CreateUserCommand } from './CreateUserCommand';

// Register Handlers
container.register("CreateUserCommandHandler", { useClass: CreateUserHandler });

// Register Mediator
container.registerSingleton<IMediator>("Mediator", Mediator);

// Example usage
async function main() {
    const mediator = container.resolve<IMediator>("Mediator");
    const command = new CreateUserCommand("John Doe", "lHd5R@example.com");
    const userId = await mediator.send(command);
    console.log(`User created with ID: ${userId}`);
}

main();