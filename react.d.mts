import { PartySocket, PartySocketOptions } from './index.mjs';
import { E as EventHandlerOptions } from './use-ws-Cb28QV7P.mjs';
export { u as useWebSocket } from './use-ws-Cb28QV7P.mjs';
import './ws.mjs';

type UsePartySocketOptions = Omit<PartySocketOptions, "host"> & EventHandlerOptions & {
    host?: string | undefined;
};
declare function usePartySocket(options: UsePartySocketOptions): PartySocket;

export { usePartySocket as default, usePartySocket };
