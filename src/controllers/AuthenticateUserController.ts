import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { code } = request.body;

        const service = new AuthenticateUserService();

        try {

            const result = await service.execute(code);

            return response.json(result);
        } catch (error) {
            const msg = { message: error.message };
            if (error.response) {
                return response.status(error.response.status).json(msg);
            }
            return response.status(500).json(msg);
        }
    }
}


export { AuthenticateUserController }
