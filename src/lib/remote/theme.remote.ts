import { type } from 'arktype';
import { form, getRequestEvent } from '$app/server';

export const setTheme = form(type({ theme: "'light' | 'dark'" }), async ({ theme }) => {
	const { cookies } = getRequestEvent();
	cookies.set('theme', theme, { path: '/', sameSite: true, maxAge: 60 * 60 * 24 * 365 });
	return { newTheme: theme };
});
