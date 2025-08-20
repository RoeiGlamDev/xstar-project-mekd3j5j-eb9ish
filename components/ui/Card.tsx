import React from 'react';
import './Card.css'; // Importing CSS for styling

interface CardProps {
    image: string; // URL for the card image
    title: string; // Title of the card
    description: string; // Description of the card
    price: string; // Price displayed on the card
}

const Card: React.FC<CardProps> = ({ image, title, description, price }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <span className="card-price">{price}</span>
            </div>
        </div>
    );
};

export default Card;