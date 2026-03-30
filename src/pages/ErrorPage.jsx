import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { theme } from "../../constants/theme";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="max-w-md w-full text-center">
                <h1
                    className="text-6xl font-bold mb-4"
                    style={{ color: theme.colors.primary }}
                >
                    Oops!
                </h1>
                <p className="text-xl text-gray-600 mb-8 font-medium">
                    Something went wrong. We're working on fixing it.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 text-left">
                    <p className="text-sm font-mono text-red-500 overflow-auto whitespace-pre-wrap">
                        {error?.statusText || error?.message || "Unknown Error"}
                    </p>
                </div>
                <Link
                    to="/"
                    className="inline-block px-8 py-3 rounded-lg text-white font-bold transition-transform hover:scale-105"
                    style={{ backgroundColor: theme.colors.primary }}
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
