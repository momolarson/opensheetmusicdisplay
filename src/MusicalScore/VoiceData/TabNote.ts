import { Note } from "./Note";
import { Fraction } from "../../Common/DataObjects/Fraction";
import { VoiceEntry } from "./VoiceEntry";
import { SourceStaffEntry } from "./SourceStaffEntry";
import { Pitch } from "../../Common/DataObjects/Pitch";

export class TabNote extends Note {
    constructor(voiceEntry: VoiceEntry, parentStaffEntry: SourceStaffEntry, length: Fraction, pitch: Pitch,
                stringNumber: number, fretNumber: number, bendNumber: number) {
        super(voiceEntry, parentStaffEntry, length, pitch);
        this.stringNumber = stringNumber;
        this.fretNumber = fretNumber;
        this.bendNumber = bendNumber;
    }

    private stringNumber: number;
    private fretNumber: number;
    private bendNumber: number;

    public get StringNumber(): number {
        return this.stringNumber;
    }

    public get FretNumber(): number {
        return this.fretNumber;
    }

    public get BendNumber(): number {
        return this.bendNumber;
    }
}
