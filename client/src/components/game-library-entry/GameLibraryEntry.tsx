import React from 'react'

type LibraryEntryProps = {
  title: string
  description: string
  splashLink: string
  gameLink: string
}

const GameLibraryEntry = ({
  title,
  description,
  splashLink,
  gameLink,
}: LibraryEntryProps) => {
  return (
    <>
      <div
        className="LibraryEntry bordered"
        onClick={() => (window.location.href = gameLink)}
      >
        <h3>{title}</h3>
        <img src={splashLink}></img>
      <div>
        <p>{description}</p>
      </div>
      </div>
    </>
  )
}

export default GameLibraryEntry
