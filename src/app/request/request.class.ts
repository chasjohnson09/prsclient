import { User } from "../user/user.class";
import {SystemService } from "../misc/system.service"

export class Request {
    id: number = 0;
    description: string = '';
    justification: string = '';
    rejectionReason: string = '';
    deliveryMode: string = '';
    status: string ='New';
    total: number = 0;
    userId: number = 0;
    user: User = null;
    userName: string = '';
}