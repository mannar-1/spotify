import Login from '../components/Login'

export default function Home() {
  return (
    <div>
      { <audio
        id='audio-element'
        hidden
        playsInline
        onVolumeChange={e => updateVolume(e)}
        onTimeUpdate={e => updateProgress(e)}
      /> }
      <Login />
      {/* temporarily render homepage before you build Login */}
    </div>
  )
}
