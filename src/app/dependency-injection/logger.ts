export interface Logger {
    prefix: string;
    log: (mesage: string) => void;
}
