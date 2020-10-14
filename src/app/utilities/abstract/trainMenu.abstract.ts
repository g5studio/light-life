import { ReturnStatement } from '@angular/compiler';
import { Injectable } from "@angular/core";
import { BackExercise, BicepsExercise, Cardio, ChestExercise, EW, LegExercise, ShoulderExercise, TricepExercise } from '@utilities/enums/training.enum';

@Injectable()

export abstract class TrainMenu {
    constructor() {

    }

    get youngExsercises() {
        return [
            this.chestExercises,
            this.shoulderExercises,
            this.backExercises,
            this.bicepsExercises,
            this.legExercises,
            this.tricepExercises
        ]
    }

    get chestExercises(): ChestExercise[] {
        return [
            ChestExercise.DumbbellBenchPress,
            ChestExercise.BarbellBenchPress,
            ChestExercise.InclineDumbbellBenchPress,
            ChestExercise.DeclineDumbbellBenchPress,
            ChestExercise.InclineBarbellBenchPress,
            ChestExercise.DeclineBarbellBenchPress,
            ChestExercise.CableFly
        ]
    }

    get shoulderExercises(): ShoulderExercise[] {
        return [
            ShoulderExercise.DumbbellShoulderPress,
            ShoulderExercise.BarbellShoulderPress,
            ShoulderExercise.SideDumbbellLateralRaise,
            ShoulderExercise.FrontDeltDumbbellFly,
            ShoulderExercise.RearDeltDumbbellFly
        ]
    }

    get backExercises(): BackExercise[] {
        return [
            BackExercise.LatPulldown,
            BackExercise.SeatedRowMachine,
            BackExercise.PullUps,
            BackExercise.Shrugs
        ]
    }

    get legExercises(): LegExercise[] {
        return [
            LegExercise.Squads,
            LegExercise.LegPress,
            LegExercise.LegCurl,
            LegExercise.LegExtension,
            LegExercise.DeadLifts
        ]
    }

    get bicepsExercises(): BicepsExercise[] {
        return [
            BicepsExercise.BarbellCurls,
            BicepsExercise.HammerCurls,
            BicepsExercise.DumbbellCurls,
            BicepsExercise.PreacherCurls,
            BicepsExercise.ConcentrationCurls
        ]
    }

    get tricepExercises(): TricepExercise[] {
        return [
            TricepExercise.TricepCablePushdown,
            TricepExercise.BenchDips,
            TricepExercise.TricepKickbacks
        ]
    }

    get cardios(): Cardio[] {
        return [
            Cardio.Swiming,
            Cardio.Biking,
            Cardio.Sliding,
            Cardio.Step
        ]
    }

    get ews(): EW[] {
        return [
            EW.ChestPress,
            EW.ShoulderPressMachine,
            EW.LegPress
        ]
    }

    public getRandomExample(id: number) {
        const EXERCISE = this.youngExsercises[id];
        return `example_${EXERCISE[this.getRandom(EXERCISE.length) - 1]}.png`
    }

    public getRandom(x) {
        return Math.floor(Math.random() * x) + 1;
    };
}