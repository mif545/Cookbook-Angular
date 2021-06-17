import { FormControl } from '@angular/forms';

export class RangeValidation {
    public static Range(from: number, to: number) {
        return (control: FormControl) => {
            if (control.value != "") {
                let x: number = control.value;

                if (x != null && (x < from || x > to))
                    return { myRangeError: { from: from, to: to, actual: x } };
            }
            return null;

        }
    }
}
