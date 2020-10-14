import { ContextFunction } from 'apollo-server-core'
import { Request, Response } from 'express';

interface ExpressContext {
    req: Request;
    res: Response;
    connection?: any;
};

export interface ProducedContext {
    user: ContextUser;
};

interface ContextUser {
    userId: string;
};



export const context: ContextFunction<ExpressContext, ProducedContext> = async ({ connection }) => {
    if (connection) return connection.context;
    
    return {
        userId: '12345'
    }
}