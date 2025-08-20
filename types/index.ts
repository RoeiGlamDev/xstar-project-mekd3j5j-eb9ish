import { ReactNode } from 'react';

export interface Property {
    id: string;
    title: string;
    description: string;
    pricePerNight: number;
    location: string;
    images: string[];
    amenities: string[];
    rating: number;
    reviewsCount: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    profilePicture: string;
    bookings: Booking[];
}

export interface Booking {
    id: string;
    propertyId: string;
    userId: string;
    checkInDate: Date;
    checkOutDate: Date;
    totalPrice: number;
}

export interface Review {
    id: string;
    propertyId: string;
    userId: string;
    rating: number;
    comment: string;
    createdAt: Date;
}

export interface AppContext {
    user: User | null;
    properties: Property[];
    bookings: Booking[];
    addBooking: (booking: Booking) => void;
    removeBooking: (bookingId: string) => void;
}

export type ChildrenProps = {
    children: ReactNode;
};

export default {}; // To ensure the file is a module