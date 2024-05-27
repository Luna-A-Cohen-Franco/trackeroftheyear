import type { IReviewable } from "./IReviewable";

export class Single implements IReviewable {
    constructor(
        public id: number,
        public title: string,
        public artist: string,
        public reviewed: boolean,
        public rating: number | null
    ) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.reviewed = reviewed;
        this.rating = rating;
    }

    isRated(): boolean {
        return this.rating !== null;
    }

    isReviewed(): boolean {
        return this.reviewed;
    }

    isCompleted(): boolean {
        return this.isRated() && this.isReviewed();
    }
}

function from(obj: Object): Single {
    if (!isSingle(obj)){
        throw new Error("Invalid input object");
    }

    let parsed = obj as Single

    return new Single(
        parsed.id,
        parsed.title,
        parsed.artist,
        parsed.reviewed,
        parsed.rating
    );
}

function isSingle(obj: Object): boolean{
    return "id" in obj && typeof obj.id == "number" &&
        "title" in obj && typeof obj.title == "string" &&
        "artist" in obj && typeof obj.artist == "string" &&
        "reviewed" in obj && typeof obj.reviewed == "boolean" &&
        "rating" in obj && (typeof obj.rating == "number" || obj.rating === null);
}

export default {
    from,
    isSingle
}