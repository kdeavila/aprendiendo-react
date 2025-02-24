import { useState } from "react"

export const TwitterFollowing = ({ name, userName, initialIsFollowing = false }: { name: string, userName: string, initialIsFollowing: boolean }) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-following-card">
            <header className="tw-follow-card-header">
                <img className="tw-follow-card-avatar" src={`https://unavatar.io/${userName}`} alt="Username image" />

                <div className="tw-follow-card-info">
                    <strong className="tw-follow-card-info-name">{name}</strong>
                    <span className="tw-follow-card-info-username">@{userName}</span>
                </div>
            </header>

            <button className={isFollowing ? "tw-follow-card-button is-following" : "tw-follow-card-button"} onClick={handleClick}>
                <span className="tw-follow-card-text">{isFollowing ? "Siguiendo" : "Seguir"}</span>
                <span className="tw-follow-card-stop-following">Dejar de seguir</span>
            </button>
        </article>

    )
}