/// <reference types="express" />

import { User as UserEntity } from "../../src/users/user.entity";

declare global {
    namespace Express {
        interface User extends UserEntity {}

        export interface Request {
            user?: User
            flash<T extends any>(key: string): Array<T>;
            flash(key: string, value: any): void;
        }
    }
}
