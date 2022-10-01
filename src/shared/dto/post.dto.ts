import { UserEntity } from "shared/entity/user.entity";

export class RTKQStateDTO<T> {
  readonly list!: Array<T>;
  readonly count!: number;
}

export type ReactionDTOType<Type> = {
  [Property in keyof Type]: number;
};

export class PostDTO {
  readonly id!: string;
  readonly reaction!: ReactionDTOType<any>;
  readonly slug!: string;
  readonly title!: string;
  readonly description!: string;
  readonly body!: string;
  readonly tagList!: string[];
  readonly created!: string;
  readonly updated!: string;
  readonly favorited?: boolean;
  readonly favoritesCount?: number;
  readonly author!: UserEntity;
}
