import ReconnectingWebSocket, { Options } from './ws.mjs';

type Maybe<T> = T | null | undefined;
type Params = Record<string, Maybe<string>>;
type PartySocketOptions = Omit<Options, "constructor"> & {
    id?: string;
    host: string;
    room?: string;
    party?: string;
    protocol?: "ws" | "wss";
    protocols?: string[];
    path?: string;
    query?: Params | (() => Params | Promise<Params>);
};
type PartyFetchOptions = {
    host: string;
    room: string;
    party?: string;
    path?: string;
    protocol?: "http" | "https";
    query?: Params | (() => Params | Promise<Params>);
    fetch?: typeof fetch;
};
declare class PartySocket extends ReconnectingWebSocket {
    readonly partySocketOptions: PartySocketOptions;
    _pk: string;
    _pkurl: string;
    name: string;
    room?: string;
    host: string;
    path: string;
    constructor(partySocketOptions: PartySocketOptions);
    updateProperties(partySocketOptions: Partial<PartySocketOptions>): void;
    private setWSProperties;
    reconnect(code?: number | undefined, reason?: string | undefined): void;
    get id(): string;
    /**
     * Exposes the static PartyKit room URL without applying query parameters.
     * To access the currently connected WebSocket url, use PartySocket#url.
     */
    get roomUrl(): string;
    static fetch(options: PartyFetchOptions, init?: RequestInit): Promise<Response>;
}

export { type PartyFetchOptions, PartySocket, type PartySocketOptions, ReconnectingWebSocket as WebSocket, PartySocket as default };
