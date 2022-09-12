import { LoginRequestDto, RegisterRequestDto } from "./request";

export class AuthService {
    constructor () {}

    users = [
        {
            id: 1,
            name: 'amos',
        },
        {
            id: 2,
            name: 'ebenhaezer',
        },
        {
            id: 3,
            name: 'manurung',
        },
    ];

    findUser(id: number) {
        return this.users.find((user) => user.id === id)
    }

    register(data: RegisterRequestDto) : {status: number, data: {} } {

        return {
            status: 200,
            data: data
        }
    }

    login(data: LoginRequestDto) {
        // return this
    }
}