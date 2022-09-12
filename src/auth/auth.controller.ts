import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { RegisterRequestDto, LoginRequestDto } from "./request";

@Controller()
@ApiTags('Auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/register')
    register(@Body() authDto: RegisterRequestDto) {
        // return this.authService.register(authDto);
        return this.authService.findUser(1);
    }

    @Post('/login')
    login(@Body() loginDto: LoginRequestDto) {
        return this.authService.login(loginDto);
    }

}