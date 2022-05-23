/**
 * Breakpoint constants
 * Using the breakpoint names as keys, and the breakpoint sizes as values
 * @type {Object}
 * @description
 *  [en]Media query object.[/en]
 * @example
 * let maxDesktop = useMediaQuery(breakpoint.m_desktop);
 **/
const breakpoint = {
  mobile: '(min-width: 36em)',
  tablet: '(min-width: 48em)',
  tabletLand: '(min-width: 62em)',
  desktop: '(min-width: 75em)',

  m_mobile: '(max-width: 35em)',
  m_tablet: '(max-width: 47em)',
  m_tabletLand: '(max-width: 61em)',
  m_desktop: '(max-width: 74em)',

  m_mobile_tablet: '(max-width: 36em) and (min-width: 48em)',
  m_mobile_tabletLand: '(max-width: 36em) and (min-width: 62em)',
  m_mobile_desktop: '(max-width: 36em) and (min-width: 75em)',
  m_tablet_tabletLand: '(max-width: 47em) and (min-width: 62em)',
  m_tablet_desktop: '(max-width: 47em) and (min-width: 75em)',

  m_tabletLand_desktop: '(max-width: 61em) and (min-width: 75em)',
};

export default breakpoint;
