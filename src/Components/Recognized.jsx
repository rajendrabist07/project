import React, { useState } from "react";
import "./Recognized.css";

const reviews = [
    {
        id: 1,
        rating: 5,
        title: "Review",
        body: "Amazing piece of clothing. Good quality and packaging and arrived on time as promised. Delivery was definitely up to a very high standard and I am pleased with my package.",
        author: "Erion B.",
        initials: "EB",
        verified: true,
        time: "1 month ago",
        helpful: 2,
        notHelpful: 2,
    },
    {
        id: 2,
        rating: 5,
        title: "Review",
        body: "Nice, true to size fit. Amazing quality",
        author: "Erion B.",
        initials: "EB",
        verified: true,
        time: "1 month ago",
        helpful: 2,
        notHelpful: 1,
    },
    {
        id: 3,
        rating: 5,
        title: 'T"Shirt" Which Standout From"SO Many Others Out There.',
        body: 'Amazing quality & value for money much appreciated 🙏 bless.',
        author: "Glenford E.",
        initials: "GE",
        verified: true,
        time: "1 month ago",
        helpful: 3,
        notHelpful: 2,
    },
    {
        id: 4,
        rating: 5,
        title: "Excellent Product",
        body: "Very comfortable and fits perfectly. The material is top notch and worth every penny. Would definitely recommend to friends and family.",
        author: "Priya S.",
        initials: "PS",
        verified: true,
        time: "2 months ago",
        helpful: 5,
        notHelpful: 0,
    },
    {
        id: 5,
        rating: 5,
        title: "Loved it!",
        body: "Fast delivery, great quality. The color is exactly as shown in the pictures. Very happy with this purchase.",
        author: "Aman K.",
        initials: "AK",
        verified: true,
        time: "3 months ago",
        helpful: 4,
        notHelpful: 1,
    },
];

const VISIBLE = 3;

function StarRating({ count }) {
    return (
        <div className="star-rating">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={i < count ? "#111" : "none"}
                    stroke="#111"
                    strokeWidth="1.5"
                >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
            ))}
        </div>
    );
}

function ReviewCard({ review }) {
    return (
        <div className="review-card">
            <div className="review-top">
                <StarRating count={review.rating} />
                <span className="review-time">{review.time}</span>
            </div>

            <p className="review-title">{review.title}</p>
            <p className="review-body">{review.body}</p>

            <hr className="review-divider" />

            <div className="review-author-section">
                <div className="author-avatar">{review.initials}</div>
                <div className="author-info">
                    <div className="author-name">{review.author}</div>
                    {review.verified && (
                        <div className="author-verified">
                            Verified Buyer
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#2563eb">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>

            <div className="review-feedback">
                <span>Was this helpful?</span>
                <span className="feedback-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                    {review.helpful}
                </span>
                <span className="feedback-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z" />
                        <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
                    </svg>
                    {review.notHelpful}
                </span>
            </div>
        </div>
    );
}

export default function CultureMakersReviews() {
    const [startIndex, setStartIndex] = useState(0);

    const canPrev = startIndex > 0;
    const canNext = startIndex + VISIBLE < reviews.length;

    const handlePrev = () => {
        if (canPrev) setStartIndex((prev) => prev - 1);
    };

    const handleNext = () => {
        if (canNext) setStartIndex((prev) => prev + 1);
    };

    const visibleReviews = reviews.slice(startIndex, startIndex + VISIBLE);

    return (
        <div className="recognized-container">
            <h1 className="recognized-title">Recognized by Culture Makers</h1>
            
            <div className="carousel-wrapper">
                <button
                    onClick={handlePrev}
                    disabled={!canPrev}
                    className="carousel-nav-btn prev-btn"
                    aria-label="Previous reviews"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <div className="carousel-track">
                    {visibleReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={!canNext}
                    className="carousel-nav-btn next-btn"
                    aria-label="Next reviews"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            <div className="carousel-indicators">
                {Array.from({ length: reviews.length - VISIBLE + 1 }).map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setStartIndex(i)}
                        className={`indicator-dot ${i === startIndex ? "active" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
}