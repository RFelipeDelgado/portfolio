import toast from "react-hot-toast";
import { Alien, Bug, Heart, BeerStein } from "@phosphor-icons/react";


export const testToast = (text: string) => {
	return toast(text, {
		duration: 2000,
		position: 'top-center',
		style: {
			backgroundColor: 'black',
			color: 'white',
			fontWeight: 'bold',
		},
		icon: <Alien size={32} />,
		ariaProps: {
			role: 'status',
			'aria-live': 'polite',
		},
	});
};

export const otroToast = (text: string) => {
	return toast(text, {
		duration: 2000,
		position: 'top-center',
		style: {
			backgroundColor: 'black',
			color: 'white',
			fontWeight: 'bold',
		},
		icon: <Bug size={32} />,
		ariaProps: {
			role: 'status',
			'aria-live': 'polite',
		},
	});
};

export const amorcitoToast = (text: string) => {
	return toast(text, {
		duration: 2000,
		position: 'top-center',
		style: {
			backgroundColor: 'red',
			color: 'white',
			fontWeight: 'bold',
		},
		icon: <Heart size={32} />,
		ariaProps: {
			role: 'status',
			'aria-live': 'polite',
		},
	});
};

export const amorcitoToast2 = (text: string) => {
	return toast(text, {
		duration: 2000,
		position: 'top-center',
		style: {
			backgroundColor: 'black',
			color: 'white',
			fontWeight: 'bold',
		},
		icon: <BeerStein size={32} />,
		ariaProps: {
			role: 'status',
			'aria-live': 'polite',
		},
	});
};