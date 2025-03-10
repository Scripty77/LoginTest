import { Injectable } from "@nestjs/common";
import { CreateUser } from "src/dto/create-user.dto";
import { PrismaService } from "src/prisma.service";


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async createUser(user: CreateUser) {
        return await this.prisma.user.create({
            data: {
                ...user,
                birthDate: new Date(user.birthDate.year, user.birthDate.month - 1, user.birthDate.day),
            },
        });
    }

    async getAllUsers() {
        return await this.prisma.user.findMany();
    }
}