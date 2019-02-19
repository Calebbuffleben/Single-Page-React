import React from 'react';
import ImageGallery from 'react-image-gallery';

export default class Slide extends React.Component{
	render(){
	    const images = [
			{
				original: 'img/1.jpg',
				thumbnail: 'img/1.jpg',
			},
			{
				original: 'img/2.jpg',
				thumbnail: 'img/2.jpg'
			},
			{
				original: 'img/3.jpg',
				thumbnail: 'img/3.jpg'
			}
	    ]

	    return (
	    	<ImageGallery items={images} autoPlay={true} />
	    );
	}
}