export interface IReviewable {
    id: number;
    title: string;
    artist: string;
    reviewed: boolean;
    rating: number | null;

    isRated(): boolean;
    isReviewed(): boolean;
    isCompleted(): boolean;
}