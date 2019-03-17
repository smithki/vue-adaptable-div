import { Subscription } from 'rxjs';
import Vue, { VueConstructor } from 'vue';
export interface AdaptableDivData {
    viewEl: HTMLDivElement | null;
    viewElResizeSubscription: Subscription | null;
    viewHeight: number;
    viewWidth: number;
}
declare const _default: VueConstructor<AdaptableDivData & {
    mounted(): void;
    beforeDestroy(): void;
    watchViewElForResize(): Promise<void>;
    setDimensions(): void;
} & {
    transitionDuration: any;
    transitionTimingFunction: any;
    transitionDelay: any;
    noTransition: any;
} & Vue>;
export default _default;
