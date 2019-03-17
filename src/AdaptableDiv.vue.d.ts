import { Subscription } from 'rxjs';
import Vue from 'vue';
export default class AdaptableDiv extends Vue {
    viewEl: HTMLDivElement | undefined;
    viewElResizeSubscription: Subscription | null;
    viewHeight: number;
    viewWidth: number;
    transitionDuration: number;
    transitionTimingFunction: string;
    transitionDelay: number;
    noTransition: boolean;
    mounted(): void;
    beforeDestroy(): void;
    watchViewElForResize(): Promise<void>;
    setDimensions(): void;
}
