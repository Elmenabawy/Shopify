import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export default function CategoriesDetails() {
    const { id } = useParams();

    // Function to fetch category details by ID
    function getCategoryDetails() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
    }

    // Fetch data using react-query
    const { data, isLoading, isError } = useQuery(['categoryDetails', id], getCategoryDetails);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading category details</div>;

    // Destructure the response data
    const categoryDetails = data?.data?.data;

    if (!categoryDetails) {
        return <div>No data available for this category.</div>;
    }

    return (
        <>
            <Helmet>
                <title>{categoryDetails.name || 'Category Details'}</title>
            </Helmet>

            <div className="category-details my-5">
                <div className="text-center">
                    <img src={categoryDetails.image} alt={categoryDetails.name} className="img-fluid rounded mb-3" style={{ maxWidth: '300px' }} />
                    <h1 className="text-main">{categoryDetails.name}</h1>
                </div>

                <div className="details mt-4">
                    <p><strong>Name:</strong> {categoryDetails.slug}</p>
                </div>
            </div>
        </>
    );
}
