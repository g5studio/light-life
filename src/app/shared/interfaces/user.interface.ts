import { ActivityLevel, Gender, TrainExperience, TrainLevel } from '@utilities/enums/user.enum';

export interface IUserProfile {
    gender?: Gender,
    age?: number,
    height?: number,
    weight?: number,
    experience?: TrainExperience,
    level?: TrainLevel,
    vegetarian?: boolean,
    activityLevel?: ActivityLevel
}