import Two from "two.js";
import {Group} from "two.js/src/group";

export function createTextRect(two: Two, label: string, width: number, height: number): Group {
    const text = two.makeText(label, 0, 0, {
        size: 24,
        fill: 'white'
    });
    const box = two.makeRectangle(0, 0, width, height);
    box.fill = '#5c6bc0';
    box.stroke = '#26418f';
    const group = two.makeGroup(box, text);
    group.position.y = two.height / 2;
    return group;
}

export function createSpaceTextRect(two: Two, label: string, width: number, height: number): any {
    const text = two.makeText(label, 0, 0, {
        size: 24,
        fill: 'black'
    });
    const box = two.makeRectangle(0, 0, width, height);
    box.fill = '#FFFFFF';
    box.stroke = '#C0C0C0';
    const group = two.makeGroup(box, text);
    group.position.y = two.height / 2;
    return group;
}
