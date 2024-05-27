import type { IReviewable } from "../reviewables/IReviewable";

export class User{
    id: number;
    username: string;
    email: string;
    password: string;
    reviewables: IReviewable[];

    constructor(id: number, username: string, email: string, password: string, reviewables: IReviewable[]){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.reviewables = reviewables;
    }
}