export function SocialIcon({ provider }) {
    switch (provider) {
        case "linkedin":
            return (
                <svg className="platform-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
            );
        case "twitter":
        case "x":
            return (
                <svg className="platform-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            );
        case "youtube":
            return (
                <svg className="platform-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            );
        case "mastodon":
            return (
                <svg className="platform-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.509.914 5.093c-.593 2.63-.64 5.688-.475 8.441.22 3.684.814 7.288 3.633 8.384 2.49.97 5.178.788 7.744.333.155-.027.306-.062.457-.101.442-.115.88-.256 1.312-.423v-2.222c-.675.209-1.37.363-2.078.461-1.85.257-3.765.25-5.597-.13-.393-.082-.76-.226-1.1-.429-.447-.267-.714-.68-.822-1.18-.046-.216-.07-.436-.07-.657.447.11 1.764.444 3.125.54 1.796.126 3.593.078 5.385-.143 2.112-.26 4.156-.91 5.952-2.116 1.834-1.233 2.617-3.08 2.894-5.187.35-2.656.327-5.407.2-8.077zM17.7 13.78h-2.38v-5.63c0-1.19-.5-1.79-1.5-1.79-1.11 0-1.67.72-1.67 2.15v3.08h-2.31v-3.08c0-1.43-.56-2.15-1.67-2.15-1 0-1.5.6-1.5 1.79v5.63H4.29V7.93c0-1.19.3-2.13.91-2.82.63-.7 1.46-1.06 2.5-1.06 1.21 0 2.13.47 2.74 1.4l.65 1.1.66-1.1c.61-.93 1.53-1.4 2.74-1.4 1.04 0 1.87.36 2.5 1.06.61.69.91 1.63.91 2.82v5.85z" />
                </svg>
            );
        case "bluesky":
            return (
                <svg className="platform-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566 1.01 1.5 1.765 1.5 3.738c0 2.164.887 8.358 1.488 10.428.694 2.39 2.76 3.2 4.67 2.658-2.613 1.34-4.498 3.535-2.02 6.002 3.393 3.376 5.875-.724 6.362-3.074.487 2.35 2.969 6.45 6.362 3.074 2.478-2.467.593-4.662-2.02-6.002 1.91.542 3.976-.268 4.67-2.658.601-2.07 1.488-8.264 1.488-10.428 0-1.973-1.066-2.728-3.702-.933C16.046 4.747 13.087 8.686 12 10.8z" />
                </svg>
            );
        case "instagram":
            return (
                <svg className="platform-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
            );
        case "reddit":
            return (
                <svg className="platform-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.56 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.56 8 13.25c0 .688.56 1.25 1.25 1.25.688 0 1.249-.562 1.249-1.25 0-.69-.56-1.25-1.25-1.25zm5.5 0c-.687 0-1.248.56-1.248 1.25 0 .688.561 1.25 1.249 1.25.688 0 1.249-.562 1.249-1.25 0-.69-.56-1.25-1.25-1.25zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                </svg>
            );
        case "twitch":
            return (
                <svg className="platform-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                </svg>
            );
        default:
            return (
                <svg className="platform-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-4 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5h-2v5H5V7h5V5z" />
                </svg>
            );
    }
}

export function parsePlatformItem(provider, rawUrl) {
    if (!rawUrl) return null;
    const cleanUrl = rawUrl.startsWith("http://") || rawUrl.startsWith("https://")
        ? rawUrl
        : `https://${rawUrl}`;

    let lowerUrl = cleanUrl.toLowerCase();
    let lowerProvider = (provider || "").toLowerCase().trim();

    if (!lowerProvider || lowerProvider === "other" || lowerProvider === "generic") {
        if (lowerUrl.includes("linkedin.com")) lowerProvider = "linkedin";
        else if (lowerUrl.includes("twitter.com") || lowerUrl.includes("x.com")) lowerProvider = "twitter";
        else if (lowerUrl.includes("bsky.app")) lowerProvider = "bluesky";
        else if (lowerUrl.includes("mastodon.") || lowerUrl.includes("mstdn.")) lowerProvider = "mastodon";
        else if (lowerUrl.includes("youtube.com") || lowerUrl.includes("youtu.be")) lowerProvider = "youtube";
        else if (lowerUrl.includes("instagram.com")) lowerProvider = "instagram";
        else if (lowerUrl.includes("reddit.com")) lowerProvider = "reddit";
        else if (lowerUrl.includes("twitch.tv")) lowerProvider = "twitch";
        else lowerProvider = "link";
    }

    let name = "Link";
    let handle = "";

    try {
        const parsed = new URL(cleanUrl);
        const pathSegments = parsed.pathname.split("/").filter(Boolean);

        switch (lowerProvider) {
            case "linkedin":
                name = "LinkedIn";
                if (pathSegments.length > 0) {
                    handle = pathSegments.join("/");
                } else {
                    handle = "LinkedIn";
                }
                break;
            case "twitter":
            case "x":
                name = "X";
                lowerProvider = "x";
                if (pathSegments.length > 0) {
                    const u = pathSegments[0].replace(/^@/, "");
                    handle = `@${u}`;
                } else {
                    handle = "X Profile";
                }
                break;
            case "bluesky":
                name = "Bluesky";
                if (pathSegments.length >= 2 && pathSegments[0] === "profile") {
                    handle = `@${pathSegments[1]}`;
                } else if (pathSegments.length > 0) {
                    handle = `@${pathSegments[pathSegments.length - 1]}`;
                } else {
                    handle = "Bluesky";
                }
                break;
            case "mastodon":
                name = "Mastodon";
                const userSeg = pathSegments.find((s) => s.startsWith("@")) || pathSegments[pathSegments.length - 1];
                handle = userSeg ? (userSeg.startsWith("@") ? userSeg : `@${userSeg}`) : parsed.hostname;
                break;
            case "youtube":
                name = "YouTube";
                handle = pathSegments[pathSegments.length - 1] || "Channel";
                break;
            case "instagram":
                name = "Instagram";
                handle = pathSegments[0] ? `@${pathSegments[0]}` : "Instagram";
                break;
            case "reddit":
                name = "Reddit";
                handle = pathSegments.length > 1 ? `u/${pathSegments[1]}` : "Reddit";
                break;
            case "twitch":
                name = "Twitch";
                handle = pathSegments[0] || "Twitch";
                break;
            default:
                name = parsed.hostname.replace(/^www\./, "");
                handle = pathSegments.length > 0 ? pathSegments.join("/") : name;
                break;
        }
    } catch {
        handle = cleanUrl;
    }

    return {
        provider: lowerProvider,
        name,
        handle,
        url: cleanUrl
    };
}

export default function SocialPlatforms({ socialAccounts = [], twitterUsername, theme = "fallout" }) {
    const platforms = [];
    const seenUrls = new Set();
    const seenProviders = new Set();
    if (Array.isArray(socialAccounts)) {
        for (const item of socialAccounts) {
            if (!item || !item.url) continue;
            const parsed = parsePlatformItem(item.provider, item.url);
            if (parsed && !seenUrls.has(parsed.url.toLowerCase())) {
                seenUrls.add(parsed.url.toLowerCase());
                seenProviders.add(parsed.provider);
                platforms.push(parsed);
            }
        }
    }
    if (twitterUsername && !seenProviders.has("twitter") && !seenProviders.has("x")) {
        const cleanHandle = twitterUsername.replace(/^@/, "");
        const twitterUrl = `https://x.com/${cleanHandle}`;
        if (!seenUrls.has(twitterUrl.toLowerCase())) {
            seenUrls.add(twitterUrl.toLowerCase());
            platforms.push({
                provider: "x",
                name: "X",
                handle: `@${cleanHandle}`,
                url: twitterUrl
            });
        }
    }

    if (platforms.length === 0) return null;

    return (
        <div className="attached-platforms-container">
            <div className="platforms-heading">
                <span className="platforms-title">
                    {theme === "fallout"
                        ? "> ATTACHED PLATFORMS & COMM FREQUENCIES:"
                        : "Attached Platforms"}
                </span>
                <span className="platforms-count">
                    ({platforms.length})
                </span>
            </div>
            <div className="platforms-grid">
                {platforms.map((p, index) => (
                    <a
                        key={`${p.provider}-${index}`}
                        href={p.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={`platform-badge platform-${p.provider}`}
                        title={`${p.name}: ${p.url}`}
                    >
                        <SocialIcon provider={p.provider} />
                        <span className="platform-name">{p.name}</span>
                        {p.handle && <span className="platform-handle">{p.handle}</span>}
                        <span className="platform-arrow" aria-hidden="true">↗</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
