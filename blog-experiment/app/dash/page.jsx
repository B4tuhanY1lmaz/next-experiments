"use client";

import React from "react";
import { useEffect, useState } from "react";

import { UserAuth } from "@/libs/authContext";

const Dashboard = () => {
    const { user } = UserAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [user]);

    return (
        <div>
            {loading ? (
                <p>Loading please wait ...</p>
            ) : user? (
                <p>Welcome, {user.displayName}!</p>
            ) : (
                <p>You must be logged in to view this page</p>
            )}
        </div>
    );
};

export default Dashboard;