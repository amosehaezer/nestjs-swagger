import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty({ required: false })
    name?: string;

    @ApiProperty({ required: false })
    address?: string;
    
}