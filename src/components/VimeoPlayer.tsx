import React from 'react'
import ReactPlayer from 'react-player'

interface VimeoPlayerProps {
  videoUrl: string
}

const playerWrapper = {
  Position: 'relative',
  paddingTop: '56.25%',
}

const reactPlayer = {
  Position: 'absolute',
  top: 0,
  left: 0,
}

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({ videoUrl }) => {
  return (
    <div className="player-wrapper" style={playerWrapper}>
      <ReactPlayer
        className="react-player"
        url={videoUrl}
        width="100%"
        height="100%"
        controls={true}
        style={reactPlayer}
      />
    </div>
  )
}

export default VimeoPlayer
