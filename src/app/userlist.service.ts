import { Injectable } from '@angular/core';
import { User } from './shared/models/user.interface';

@Injectable()
export class UserlistService {
    private users: User[] = ([
            {id: 0, name: "Carlo", age: 25, birthDate: new Date(), address: "Trento"},
            {id: 1, name: "Sofia", age: 23, birthDate: new Date(), address: "Pergine"},
            {id: 2, name: "Giacomo", age: 26, birthDate: new Date(), address: "Povo"},
            {id: 3, name: "Chiara", age: 25, birthDate: new Date(), address: "Padova"},
            {id: 4, name: "Matteo", age: 19, birthDate: new Date(), address: "Bolzano"}
        ]);
    private idCount: number = 5;

    public newUser(name: string, age: number, birthDate: Date, address: string): void {
        let nUser: User = {id: this.idCount, name: name, age: age, birthDate: birthDate, address: address};
        this.users.push(nUser);
        this.idCount++;
        console.log(this.users);
    }

    public deleteUser(id: number): void {
        this.users = this.users.filter(user => user.id !== id);
    }

    public editUser(id: number, name: string, age: number, birthDate: Date, address: string): void {
        let eUser: User = {id: id, name: name, age: age, birthDate: birthDate, address: address};
        this.users[this.users.findIndex(u => u.id == id)] = eUser;
    }

    public getUsers(): User[] {
        return this.users;
    }

    public getUser(id: number): User {
        return this.users[this.users.findIndex(u => u.id == id)];
    }

}
