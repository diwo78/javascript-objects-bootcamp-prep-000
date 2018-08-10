var playlist = { artistName: "songTitle"}
function updatePlaylist (playlist,artistName,songTitle){
  playlist.song = 'artist';
  
}

function removeFromPlaylist (playlist,artistName){
  return delete playlist.artistName
}