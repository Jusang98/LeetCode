/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  if (x < 2) return x;

  let left = 1, right = Math.floor(x / 2), ans = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      ans = mid; // mid가 현재까지의 정답 후보
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}