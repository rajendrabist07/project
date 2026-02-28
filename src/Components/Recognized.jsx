import { useState } from "react";

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
        title: 'T"Shirt" Which Standout From"SO Many Others Out There. "Thanks Again .',
        body: 'Amazing "quality & value for money "much appreciated " 🙏 bless .',
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

const VISIBLE = 3; // show 3 cards at a time

function StarRating({ count }) {
    return (
        <div style={{ display: "flex", gap: "2px" }}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill={i < count ? "#1a1a1a" : "none"}
                    stroke="#1a1a1a"
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
        <div
            style={{
                background: "#ffffff",
                border: "1px solid #e0ddd8",
                borderRadius: "8px",
                padding: "28px 28px 20px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "260px",
                flex: "1 1 0",
                boxSizing: "border-box",
            }}
        >
            {/* Top: stars + time */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "12px",
                }}
            >
                <StarRating count={review.rating} />
                <span style={{ fontSize: "13px", color: "#888", whiteSpace: "nowrap" }}>
                    {review.time}
                </span>
            </div>

            {/* Title */}
            <p
                style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    color: "#1a1a1a",
                    marginBottom: "8px",
                    fontFamily: "'Georgia', serif",
                    lineHeight: "1.4",
                }}
            >
                {review.title}
            </p>

            {/* Body */}
            <p
                style={{
                    fontSize: "14px",
                    color: "#444",
                    lineHeight: "1.6",
                    flexGrow: 1,
                    marginBottom: "20px",
                }}
            >
                {review.body}
            </p>

            {/* Divider */}
            <hr style={{ border: "none", borderTop: "1px solid #e0ddd8", margin: "0 0 16px 0" }} />

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#d9d6cf",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "700",
                        fontSize: "13px",
                        color: "#1a1a1a",
                        flexShrink: 0,
                    }}
                >
                    {review.initials}
                </div>
                <div>
                    <div style={{ fontWeight: "600", fontSize: "14px", color: "#1a1a1a" }}>
                        {review.author}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "13px",
                            color: "#555",
                        }}
                    >
                        Verified Buyer
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#2563eb">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Helpful row */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "13px",
                    color: "#666",
                }}
            >
                <span>Was this helpful?</span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                    {review.helpful}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
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
        <div
            style={{
                background: "#f0ede6",
                padding: "60px 40px",
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                minHeight: "420px",
            }}
        >
            {/* Title */}
            <h1
                style={{
                    textAlign: "center",
                    fontWeight: "900",
                    fontSize: "26px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#1a1a1a",
                    marginBottom: "40px",
                    fontFamily: "'Georgia', serif",
                }}
            >
                Recognized by Culture Makers
            </h1>

            {/* Carousel Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                {/* Prev Arrow */}
                <button
                    onClick={handlePrev}
                    disabled={!canPrev}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: canPrev ? "pointer" : "default",
                        fontSize: "28px",
                        color: canPrev ? "#1a1a1a" : "#bbb",
                        padding: "8px",
                        flexShrink: 0,
                        transition: "color 0.2s",
                    }}
                    aria-label="Previous reviews"
                >
                    &#8249;
                </button>

                {/* Cards */}
                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        flex: 1,
                        overflow: "hidden",
                    }}
                >
                    {visibleReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                {/* Next Arrow */}
                <button
                    onClick={handleNext}
                    disabled={!canNext}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: canNext ? "pointer" : "default",
                        fontSize: "28px",
                        color: canNext ? "#1a1a1a" : "#bbb",
                        padding: "8px",
                        flexShrink: 0,
                        transition: "color 0.2s",
                    }}
                    aria-label="Next reviews"
                >
                    &#8250;
                </button>
            </div>

            {/* Dot indicators */}
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "28px" }}>
                {Array.from({ length: reviews.length - VISIBLE + 1 }).map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setStartIndex(i)}
                        style={{
                            width: i === startIndex ? "24px" : "8px",
                            height: "8px",
                            borderRadius: "4px",
                            background: i === startIndex ? "#1a1a1a" : "#bbb",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}