import React from 'react';

const Card = ({id, name, emails}) => {
	return(
		<div className='bg-light-green dib br3 pa3 ma2 grow'>
			<img alt='robots' src= {`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<h2>{emails}</h2>
			</div>
		</div>
		);
}

export default Card