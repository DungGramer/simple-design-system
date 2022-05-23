import styles from './ClickableEffect.module';

/**
 * Create an Ripple effect that will make the element clickable.
 * @param {window.event} event
 *
 * @example
 * <button className={clickableEffect.styles} onclick={clickableEffect.handle}>Click me!</button>
 */

function createRipple(event) {
  const button = event.currentTarget;
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  const circle = document.createElement('span');
  circle.className = styles['span-ripple'];
  circle.style.width = circle.style.height = `${diameter}px`;

  let locationTouch = {
    x: event.clientX,
    y: event.clientY,
  };
  const locationButton = {
    x: button.getBoundingClientRect().x,
    y: button.getBoundingClientRect().y,
  };

  circle.style.left = `${locationTouch.x - locationButton.x - radius}px`;
  circle.style.top = `${locationTouch.y - locationButton.y - radius}px`;

  button.appendChild(circle);

  setTimeout(() => {
    button.removeChild(circle);
  }, 700); // timeout = animation-time
}

const clickableEffect = {
  style: styles.ripple,
  handle: createRipple,
};

export default clickableEffect;
