
function toNumber(pixels: string) {
  if (pixels == "") return 0;
  return Number(pixels.replace(/px$/, ''));
}

function deltaX(from: any, to: any): number {
  const fromCS = getComputedStyle(from);
  const toCS = getComputedStyle(to);
  const toX = toNumber(toCS.left) + toNumber(toCS.width) / 2;
  const fromX = toNumber(fromCS.left) + toNumber(fromCS.width) / 2;
  return toX - fromX;

}

function deltaY(from: any, to: any): number {
  const fromCS = getComputedStyle(from);
  const toCS = getComputedStyle(to);
  const toY = toNumber(toCS.top) + toNumber(toCS.height) / 2;
  const fromY = toNumber(fromCS.top) + toNumber(fromCS.height) / 2;
  return toY - fromY;
}

export function moveTo(to: any) {
  return {
    translateX: function(el: any) {
      return deltaX(el, to);
    },
    translateY: function(el: any) {
      return deltaY(el, to);
    }
  }
}

export function moveTargetsTo(targets: any, to: any) {
  return {
    targets: targets,
    ...moveTo(to)
  }
}
