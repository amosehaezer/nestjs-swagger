import { Body, Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Request } from "express";
import { UserDto } from "./dto";
import { UserService } from "./user.service";

@Controller()
export class UserController {
    constructor(private userService: UserService) {}
    @ApiTags('User')
    
    @Get('/users')
    getUser(@Body() createUser: UserDto) {
        // return this.userService.register(req['username'], req['name']);
        // return this.userService
    }
    // }
}