import { PartySocket, PartySocketOptions } from './index.js';
import { E as EventHandlerOptions } from './use-ws-CnrrNZS2.js';
export { u as useWebSocket } from './use-ws-CnrrNZS2.js';
import './ws.js';

type UsePartySocketOptions = Omit<PartySocketOptions, "host"> & EventHandlerOptions & {
    host?: string | undefined;
};
declare function usePartySocket(options: UsePartySocketOptions): PartySocket;

export { usePartySocket as default, usePartySocket };
