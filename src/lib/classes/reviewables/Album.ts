import type { IReviewable } from "./IReviewable";
import type { Track } from "./Track";
import TrackUtils from "./Track";

export class Album implements IReviewable {
    track_ratings: Track[];
    constructor(
        public id: number,
        public title: string,
        public artist: string,
        public reviewed: boolean,
        public rating: number | null,
        track_ratings: Track[]
    ) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.reviewed = reviewed;
        this.rating = rating;
        this.track_ratings = track_ratings;
    }

    isRated(): boolean {
        return this.rating !== null;
    }

    isReviewed(): boolean {
        return this.reviewed;
    }

    isCompleted(): boolean {
        return this.isTrackRated() && 
            this.isRated() && 
            this.isReviewed();
    }

    isTrackRated(): boolean{
        return this.track_ratings.every(track => track.isRated());
    }
}

function from(obj: Object): Album {
    if (!isAlbum(obj)){
        throw new Error("Invalid input object");
    }

    let parsed = obj as Album

    return new Album(
        parsed.id,
        parsed.title,
        parsed.artist,
        parsed.reviewed,
        parsed.rating,
        parsed.track_ratings.map(TrackUtils.from)
    );
}

function isAlbum(obj: Object): boolean{
    return "id" in obj && typeof obj.id == "number" &&
        "title" in obj && typeof obj.title == "string" &&
        "artist" in obj && typeof obj.artist == "string" &&
        "reviewed" in obj && typeof obj.reviewed == "boolean" &&
        "rating" in obj && (typeof obj.rating == "number" || obj.rating === null) &&
        "track_ratings" in obj && Array.isArray(obj.track_ratings) && 
        obj.track_ratings.every(TrackUtils.isTrack);
}

export default {
    from,
    isAlbum
}