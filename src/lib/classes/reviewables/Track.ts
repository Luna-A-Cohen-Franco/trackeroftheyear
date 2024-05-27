export class Track{
    parentId: number;
    id: number;
    title: string;
    rating: number | null;

    constructor(parentId: number, id: number, title: string, rating: number | null){
        this.parentId = parentId;
        this.id = id;
        this.title = title;
        this.rating = rating;
    }

    isRated(): boolean {
        return this.rating !== null;
    }
}

function from(obj: Object): Track {
    if (!isTrack(obj)){
        throw new Error("Invalid input object");
    }

    let parsed = obj as Track

    return new Track(
        parsed.parentId,
        parsed.id,
        parsed.title,
        parsed.rating
    );
}

function isTrack(obj: Object): boolean{
    return "parentId" in obj && typeof obj.parentId == "number" &&
        "id" in obj && typeof obj.id == "number" &&
        "title" in obj && typeof obj.title == "string" &&
        "rating" in obj && (typeof obj.rating == "number" || obj.rating === null);
}

export default {
    from,
    isTrack
}