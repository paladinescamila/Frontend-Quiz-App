import React from 'react';

export default function CardList({children}: {children: React.ReactNode}) {
	return <ul className='flex flex-col gap-4 md:gap-6 lg:gap-4'>{children}</ul>;
}
