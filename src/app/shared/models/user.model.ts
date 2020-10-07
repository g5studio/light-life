import { IUserProfile } from '@shared/interfaces/user.interface';

export class User {
    public email: string;
    public emailVerified: boolean;
    public name: string;
    public uid: string;
    public profile: IUserProfile = {} as IUserProfile;
    constructor({ email, emailVerified, displayName, uid }, profile?) {
        this.email = email;
        this.emailVerified = emailVerified;
        this.name = displayName;
        this.uid = uid;
        if (profile) {
            this.setProfile(profile)
        }
    }

    get isProjectInfoCompleted(): boolean {
        return !!(this.profile?.age && this.profile?.experience && this.profile?.gender && this.profile?.level && this.profile?.weight && this.profile?.vegetarian !== undefined);
    }

    get isTDEEInfoCompleted(): boolean {
        return !!(this.profile?.age && this.profile?.gender && this.profile?.activityLevel && this.profile?.weight);
    }

    public setProfile(profile: IUserProfile) {
        this.profile = { ...this.profile, ...profile };
    }
}