/**
 * Adding z-indices here gives a good overview of the stacking indexes' order.
 */

export const zIndexes = {
  gridOverlay: 9999,
  // Only one of these UIs is present at anytime
  // so there's no risk of conflict
  splashScreenUI: 999,
  pageTransitionUI: 999,
}
