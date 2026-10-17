import { useEffect, useState } from "react";
import User from "./user";
import "./style.css";

export default function GithubProfileFinder() {
    const [userName, setUsername] = useState("adityad1907");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [theme, setTheme] = useState("fallout");

    async function fetchGithubUserData() {
        if (!userName.trim()) return;

        try {
            setLoading(true);
            setErrorMsg(null);
            const trimmedUser = userName.trim();

            const [userRes, socialRes] = await Promise.all([
                fetch(`https://api.github.com/users/${trimmedUser}`),
                fetch(`https://api.github.com/users/${trimmedUser}/social_accounts`).catch(() => null)
            ]);

            const data = await userRes.json();

            if (data && data.message === "Not Found") {
                setErrorMsg(
                    theme === "fallout"
                        ? `[ERROR 404]: CITIZEN RECORD "${userName}" NOT FOUND IN MAINFRAME ARCHIVES.`
                        : `No GitHub user found with username "${userName}"`
                );
                setUserData(null);
            } else if (data) {
                let socialAccounts = [];
                if (socialRes && socialRes.ok) {
                    try {
                        const parsedSocial = await socialRes.json();
                        if (Array.isArray(parsedSocial)) {
                            socialAccounts = parsedSocial;
                        }
                    } catch (e) {
                        console.warn("Could not parse social accounts:", e);
                    }
                }

                setUserData({
                    ...data,
                    social_accounts: socialAccounts
                });
                setErrorMsg(null);
            }
        } catch (error) {
            console.error("Error fetching GitHub user:", error);
            setErrorMsg(
                theme === "fallout"
                    ? "[ERROR 500]: HOLOTAPE NETWORK COMM DISRUPTED. PLEASE RETRY."
                    : "Failed to fetch user data. Please try again later."
            );
            setUserData(null);
        } finally {
            setLoading(false);
        }
    }

    function handleSubmit(event) {
        if (event) event.preventDefault();
        fetchGithubUserData();
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
    }

    function toggleTheme() {
        setTheme((prev) => (prev === "fallout" ? "modern" : "fallout"));
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    return (
        <>
            {theme === "fallout" && <div className="crt-overlay" aria-hidden="true"></div>}

            <div
                className={`github-profile-container ${theme === "modern" ? "modern-theme" : "fallout-theme"
                    }`}
            >
                <div className="terminal-header">
                    <div className="terminal-brand">
                        <span className="robco-title">GITHUB PROFILE FINDER</span>
                        <span className="terminal-subtitle">
                            {theme === "fallout"
                                ? "> GITHUB DATABASE"
                                : "GitHub Profile Finder Application"}
                        </span>
                    </div>
                    <button
                        type="button"
                        className="theme-toggle-btn"
                        onClick={toggleTheme}
                        title="Toggle Theme"
                    >
                        [ {theme === "fallout" ? "MODE: CRT TERMINAL" : "MODE: MODERN"} ]
                    </button>
                </div>
                <div className="input-wrapper">
                    {theme === "fallout" && <span className="input-prefix">&gt;</span>}
                    <input
                        name="search-by-username"
                        type="text"
                        placeholder={
                            theme === "fallout"
                                ? "ENTER GITHUB USERNAME..."
                                : "Search GitHub username..."
                        }
                        value={userName}
                        onChange={(event) => setUsername(event.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button type="button" onClick={handleSubmit}>
                        {theme === "fallout" ? "QUERY" : "Search"}
                    </button>
                </div>

                {loading ? (
                    <h1>
                        {theme === "fallout"
                            ? "> ACCESSING GITHUB DATABASE... PLEASE WAIT"
                            : "Loading...! please wait"}
                    </h1>
                ) : errorMsg ? (
                    <div className="error-message">{errorMsg}</div>
                ) : userData !== null ? (
                    <User user={userData} theme={theme} />
                ) : null}
            </div>
        </>
    );
}