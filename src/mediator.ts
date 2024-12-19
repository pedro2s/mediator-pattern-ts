import { injectable, container } from 'tsyringe';
import { IMediator, IRequest, IRequestHandler } from './protocols';

@injectable()
export class Mediator implements IMediator {
    send<TRequest extends IRequest<TResponse>, TResponse>(request: TRequest): Promise<TResponse> {
        const handle = container.resolve<IRequestHandler<TRequest, TResponse>>(
            (request as any).constructor.name + "Handler"
        )
        return handle.handle(request);
    }
}