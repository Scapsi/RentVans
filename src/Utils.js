import { redirect } from 'react-router-dom';

export async function requiredAuth() {
  //const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem('login');

  if (!isLoggedIn) {
    throw redirect('login?message=you must logIn first.');
  }
}
