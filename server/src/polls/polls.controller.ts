import { Body, Controller, Logger, Post } from "@nestjs/common";
import { CreatePollDto } from "./dtos";

@Controller('polls')
export class PollsController {
    @Post()
    async create(@Body() createPollDto: CreatePollDto) {
        Logger.log('Create!');
    }

    @Post('/join')
    async join(){
        Logger.log('Join!');
    }

    @Post('/rejoin')
    async rejoin(){
        Logger.log('Rejoin!');
    }
}