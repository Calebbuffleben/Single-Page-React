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
				original: '',
				thumbnail: ''
			},
			{
				original: '',
				thumbnail: ''
			}
	    ]

	    return (
	    	<ImageGallery items={images} />
	    );
	}
}