import SocialPlatforms from "./socialPlatforms";

export default function User({ user, theme = "fallout" }) {
    const {
        avatar_url,
        followers,
        following,
        public_repos,
        name,
        login,
        created_at,
        bio,
        location,
        blog,
        company,
        twitter_username,
        social_accounts
    } = user;

    const createdDate = new Date(created_at);

    return (
        <div className="user">
            <div>
                <img src={avatar_url} className="avatar" alt="User avatar" />
            </div>
            <div className="name-container">
                <a
                    href={`https://github.com/${login}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {name || login}
                </a>
                <p>
                    User joined on{" "}
                    {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                        month: "short",
                    })} ${createdDate.getFullYear()}`}
                </p>
            </div>

            {bio && <p className="user-bio">{bio}</p>}

            <div className="profile-info">
                <div>
                    <p>Public Repos</p>
                    <p>{public_repos ?? 0}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>{followers ?? 0}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p>{following ?? 0}</p>
                </div>
            </div>

            <SocialPlatforms
                socialAccounts={social_accounts}
                twitterUsername={twitter_username}
                theme={theme}
            />

            {(location || company || blog) && (
                <div className="user-details">
                    {company && <p>🏢 Company: {company}</p>}
                    {location && <p>📍 Location: {location}</p>}
                    {blog && (
                        <p>
                            🔗{" "}
                            <a
                                href={blog.startsWith("http") ? blog : `https://${blog}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {blog}
                            </a>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}