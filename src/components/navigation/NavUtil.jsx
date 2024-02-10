import { gsap } from 'gsap';

export const onEnter = ({ currentTarget }) => {
  gsap.to(currentTarget, { backgroundColor: '#C0C0C0', scale: 1.2 });
};

export const onLeave = ({ currentTarget }) => {
  gsap.to(currentTarget, { backgroundColor: '#121110', scale: 1 });
};

export const links = [
  { path: '/', text: 'Home', class: 'nav_links nav_links1' },
  { path: 'about_me', text: 'About Me', class: 'nav_links nav_links1' },
  { path: 'project', text: 'Projects', class: 'nav_links nav_links1' },
  { path: 'contact', text: 'Contacts', class: 'nav_links nav_links1' },
];
