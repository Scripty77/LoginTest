import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser } from 'src/dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/create')
    async createUser(@Body() user: CreateUser) {
        const newUser = await this.userService.createUser(user);
        return { message: 'User creado', user: newUser };
    }

    //trae a todos los usuarios
    @Get('/getall')
    async getAllUsers() {
        const users = await this.userService.getAllUsers();
        return users;
    }
}
