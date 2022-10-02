import { STATUS } from '../../../core/redux/app/constant';

export class RTKQStateItemDTO<T> {
    readonly [name: string]: T;
}

export class RTKQStateDTO<T> {
    readonly list!: Array<T>;
    readonly count!: number;
}

export class StateDTO<T> {
    readonly data!: { list: Array<T>; count: number };
    readonly status!: STATUS;
    readonly error?: any;
}



