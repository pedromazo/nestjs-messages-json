import { MessagesRepository } from "./messages.repository";


export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor() {
        // SERVICE IS CREATING ITS OWN DEPENDENCIES
        //DONT DO THIS ON REAL APPS, DO DEPENDENCY INJECTION
        this.messagesRepo = new MessagesRepository();
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}